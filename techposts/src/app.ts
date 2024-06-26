import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'

export const app = fastify()

app.register(personRoutes)
