import { Person } from '@/entities/person.entity'

export interface IPersonRepository {
  create(person: Person): Promise<Person | undefined>
}
