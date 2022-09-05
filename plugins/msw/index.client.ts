import { setupWorker } from 'msw'
import handlers from './handlers'

export default defineNuxtPlugin(() => {
  const worker = setupWorker(...handlers)
  worker.start()
})
