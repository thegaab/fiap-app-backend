import { User } from '@/entities/user.entity'
import { Person } from '@/entities/person.entity'
import { database } from '@/lib/pg/db'
import { IUserRepository } from '../user.repository.interface'

export class UserRepository implements IUserRepository {
  public async create({ username, password }: User): Promise<User | undefined> {
    const result = await database.clientInstance?.query<User>(
      `INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password],
    )

    return result?.rows[0]
  }

  public async findWithPerson(
    userId: number,
  ): Promise<(User & Person) | undefined> {
    const result = await database.clientInstance?.query(
      `SELECT * FROM "user"
      LEFT JOIN person ON "user".id = person.user_id
      WHERE "user".id = $1`,
      [userId],
    )
    return result?.rows[0]
  }
}
