import { ICourseRepository } from '@/repositories/course.repository.interface'
import { ICourse } from './create-course'
import { IPerson } from '@/entities/models/person.interface'

export class FindCourseByPersonUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async handler(
    personId: number,
    page: number,
    limit: number,
  ): Promise<(ICourse & IPerson)[]> {
    return this.courseRepository.findCourseByPersonId(personId, page, limit)
  }
}
