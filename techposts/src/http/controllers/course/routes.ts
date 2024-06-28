import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findCourse } from './find-course'

export async function courseRoutes(app: FastifyInstance) {
  app.post('/course', create)
  // route not found:404
  app.get('/course/person/:personId', findCourse)
}
