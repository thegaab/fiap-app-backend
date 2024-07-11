import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routes'
import { globalErrorHandler } from './utils/global-error-handler'
import { courseRoutes } from './http/controllers/course/routes'

export const app = fastify()

app.register(personRoutes)
app.register(userRoutes)
app.register(courseRoutes)

app.setErrorHandler(globalErrorHandler)
