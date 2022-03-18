export class ParamPropertyError extends Error {
  status: number
  constructor(message: string) {
    super(message)
    this.name = 'ParamPropertyError'
    this.message = message
    this.status = 400
  }
}
