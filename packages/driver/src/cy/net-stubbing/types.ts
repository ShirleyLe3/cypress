import {
  CyHttpMessages,
  RouteHandler,
  RouteMatcherOptions,
  HttpResponseInterceptor,
  RequestState,
} from '@packages/net-stubbing/lib/types'

export { RequestState }

export interface Route {
  alias?: string
  log: Cypress.Log
  options: RouteMatcherOptions
  handler: RouteHandler
  hitCount: number
  requests: { [key: string]: Request }
}

export type RouteMap = { [key: string]: Route }

export interface Request {
  req: CyHttpMessages.IncomingRequest
  responseHandler?: HttpResponseInterceptor
  state: RequestState
  log: Cypress.Log
  requestWaited: boolean
  responseWaited: boolean
}
