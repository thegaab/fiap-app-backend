import { CourseRepository } from '@/repositories/pg/course.repository'
import { CreateCourseUseCase } from '../create-course'

export function makeCreateCourseUseCase() {
  const courseRepository = new CourseRepository()

  const createCourseUseCase = new CreateCourseUseCase(courseRepository)

  return createCourseUseCase
}
