import { CourseRepository } from '@/repositories/pg/course.repository'
import { CreateCourseUseCase } from '../create-course'

export function makeCreateCourseUseCaso() {
  const courseRepository = new CourseRepository()

  const createCourseUseCaso = new CreateCourseUseCase(courseRepository)

  return createCourseUseCaso
}
