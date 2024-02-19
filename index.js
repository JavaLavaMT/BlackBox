// Import the framework and instantiate it
import Fastify from 'fastify'
import send from './src/apps/sms/2fa.js'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/sms-2fa', async function handler (request, reply) {
  // send({ body: 'Hello from SignalWire Functions!', to: '+14062834665' }) // test the text going in to singalwire should triggger > LamL > bin > POST /sms-2fa
  return { hello: 'world' }
})

fastify.post('/sms-2fa', async function handler (request, reply) {
  if (request.body.secrets === process.env.SECRET) {
    //need to get an array of phone numbers from evn variables
    const phoneNumbers = process.env.PHONE_NUMBERS.split(',');
    //send the message to each phone number You received a message from: {{From}} to SignalWire number: {{To}}. The message is: "{{Body}}"
    phoneNumbers.forEach((phoneNumber) => {
     send({ body: `You received a message from: ${request.body.from} to SignalWire number: ${request.body.to}. The message is: "${request.body.body}"`, to: phoneNumber })
    })
  }
})

fastify.get('/', async function handler (request, reply) {
  // send({ body: 'Hello from SignalWire Functions!', to: '+14062834665' })
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
