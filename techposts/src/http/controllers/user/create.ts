import { UserRepository } from '@/repositories/user.repository'
import { CreateUserUseCase } from '@/use-cases/create-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(req.body)

  try {
    const userRepository = new UserRepository()
    const createUserUseCase = new CreateUserUseCase(userRepository)

    const user = await createUserUseCase.handler({ username, password })

    return reply.status(201).send(user)
  } catch (error) {
    console.error(`Ops! Error creating user: ${error}`)

    throw new Error(`Ops! Error creating user: ${error}`)
  }
}
