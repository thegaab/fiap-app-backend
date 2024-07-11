import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(req.body)

  const createUserUseCase = makeCreateUserUseCase()

  const user = await createUserUseCase.handler({ username, password })

  return reply.status(201).send(user)
}
