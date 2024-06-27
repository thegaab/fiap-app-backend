import { ICourse } from '@/entities/models/course.interface'
import { ICourseRepository } from '@/repositories/course.repository.interface'

export class CreateCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async ErrorHandlerMap(course: ICourse): Promise<ICourse | undefined> {
    return this.courseRepository.create(course)
  }
}
export { ICourse }
