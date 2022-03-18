export class QueryPropertyError extends Error {
  status: number
  constructor(message: string) {
    super(message)
    this.name = 'QueryPropertyError'
    this.message = message
    this.status = 400
  }
}
