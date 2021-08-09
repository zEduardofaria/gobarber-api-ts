import { Router } from 'express'
import { v4 as uuid } from 'uuid';

const appointmenrsRouter = Router()

const appointments = []

appointmenrsRouter.post('/', (request, response) => {
  const { provider, date } = request.body

  const appointment = {
    id: uuid(),
    provider,
    date,
  }

  appointments.push(appointment)

  return response.json(appointment)
})

export default appointmenrsRouter