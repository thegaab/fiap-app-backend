import { env } from './env'
import { app } from '@/app'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(
      `Let's celebrate! Server is running on http://localhost:${env.PORT}`,
    )
  })
