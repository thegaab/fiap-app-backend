import { ICourseRepository } from '../course.repository.interface'
import { database } from '@/lib/pg/db'
import { ICourse } from '@/use-cases/create-course'
import { IPerson } from '@/entities/models/person.interface'

export class CourseRepository implements ICourseRepository {
  async findCourseByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(ICourse & IPerson)[]> {
    const offset = (page - 1) * limit

    const query = `
      SELECT course.*, person.*
      FROM course
      JOIN person ON course.person_id = person.id
      WHERE person.id = $1
      LIMIT $2 OFFSET $3
    `

    const result = await database.clientInstance?.query<ICourse & IPerson>(
      query,
      [personId, limit, offset],
    )

    return result?.rows || []
  }

  async create({
    name,
    period,
    school_class,
    person_id,
  }: ICourse): Promise<ICourse | undefined> {
    const result = await database.clientInstance?.query<ICourse>(
      `
      INSERT INTO "course" (name, period, school_class, person_id) VALUES
      ($1, $2, $3, $4) RETURNING *
      `,
      [name, period, school_class, person_id],
    )

    return result?.rows[0]
  }
}
