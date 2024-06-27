import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findUser } from './find-user'

export async function userRoutes(app: FastifyInstance) {
  app.post('/user', create)
  app.get('/user/:id', findUser)
}
