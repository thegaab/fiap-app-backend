import { CourseRepository } from '@/repositories/pg/course.repository'
import { FindCourseByPersonUseCase } from '../find-course-by-person'

export function makeFindCourseByPersonUseCase() {
  const courseRepository = new CourseRepository()
  const findCourseByPersonUseCase = new FindCourseByPersonUseCase(
    courseRepository,
  )

  return findCourseByPersonUseCase
}
