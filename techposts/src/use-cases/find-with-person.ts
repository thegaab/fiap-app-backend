import { Person } from '@/entities/person.entity'
import { UserRepository } from '@/repositories/user.repository'
import { User } from '@/entities/user.entity'

export class FindWithPersonUseCase {
  constructor(private userRepository: UserRepository) {}
  async handler(userId: number): Promise<(User & Person) | undefined> {
    return this.userRepository.findWithPerson(userId)
  }
}
