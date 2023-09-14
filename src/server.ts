import { fastify } from "fastify"

const app = fastify()

app.get('/', () => {
  return "Hellow World"
})

app.listen({
  port: 3333
}).then(() => {
  console.log('http server running!')
})