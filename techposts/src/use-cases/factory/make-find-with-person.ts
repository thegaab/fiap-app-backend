import { FindWithPersonUseCase } from '../find-with-person'
import { UserRepository } from '@/repositories/pg/user.repository'

export function makeFindWithPersonUseCase() {
  const userRepository = new UserRepository()
  const findWithPersonUseCase = new FindWithPersonUseCase(userRepository)
  return findWithPersonUseCase
}
