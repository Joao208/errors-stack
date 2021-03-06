export class ForbiddenError extends Error {
  status: number
  constructor(message: string) {
    super(message)
    this.name = 'ForbiddenError'
    this.message = message
    this.stack = new Error().stack
    this.status = 403
  }
}
