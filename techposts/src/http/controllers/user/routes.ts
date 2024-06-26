import { FastifyInstance } from 'fastify'
import { create } from './create'

export async function userRoutes(app: FastifyInstance) {
  app.post('/user', create)
}
