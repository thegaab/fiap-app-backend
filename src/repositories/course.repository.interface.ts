import { ICourse } from '@/entities/models/course.interface'
import { IPerson } from '@/entities/models/person.interface'

export interface ICourseRepository {
  findCourseByPersonId(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(ICourse & IPerson)[]>
  create(course: ICourse): Promise<ICourse | undefined>
}
