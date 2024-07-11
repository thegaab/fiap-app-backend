import { makeCreateCourseUseCase } from '@/use-cases/factory/make-create-course-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(req: FastifyRequest, reply: FastifyReply) {
  // Definindo o esquema de validação para o corpo da requisição
  const registerBodySchema = z.object({
    name: z.string(),
    period: z.string(),
    school_class: z.string(),
    person_id: z.coerce.number(),
  })

  // Validando e extraindo os dados da requisição
  const { name, period, school_class, person_id } = registerBodySchema.parse(
    req.body,
  )

  // Criando uma instância do caso de uso
  const createCourseUseCase = makeCreateCourseUseCase()

  // Chamando o método handler do caso de uso
  const course = await createCourseUseCase.handler({
    name,
    period,
    school_class,
    person_id,
  })

  // Enviando a resposta com o código de status 201 (Criado)
  reply.code(201).send(course)
}
