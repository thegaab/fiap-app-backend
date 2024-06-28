import { makeFindCourseByPersonUseCase } from '@/use-cases/factory/make-find-course-by-person-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findCourse(req: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    personId: z.coerce.number(),
  })

  const registerQuerySchema = z.object({
    page: z.coerce.number(),
    limit: z.coerce.number(),
  })

  const { personId } = registerParamsSchema.parse(req.params)
  const { page, limit } = registerQuerySchema.parse(req.query)

  const findCourserByPersonUseCase = makeFindCourseByPersonUseCase()

  const course = await findCourserByPersonUseCase.handler(personId, page, limit)

  return reply.status(200).send(course)
}
