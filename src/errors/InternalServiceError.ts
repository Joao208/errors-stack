export class InternalServiceError extends Error {
  status: number
  constructor(message: string) {
    super(message)
    this.name = 'InternalServiceError'
    this.message = message
    this.status = 503
  }
}
