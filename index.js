// Import the framework and instantiate it
import Fastify from 'fastify'
import send from './src/apps/sms/2fa.js'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/sms-2fa', async function handler (request, reply) {
  send({ body: 'Hello from SignalWire Functions!', to: '+14062834665' })
  return { hello: 'world' }
})

// Run the server!
try {
  console.log('Starting server...')
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
