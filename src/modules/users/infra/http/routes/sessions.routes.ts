import { Router } from 'express'

import { SessionsController } from '../controllers/SessionsController'

const sessionsControlleer = new SessionsController()

const sessionsRouter = Router()

sessionsRouter.post('/', sessionsControlleer.create)

export { sessionsRouter }
