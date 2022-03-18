interface IError {
  name: string
  message: string
  body: object
}

export class ValidationError extends Error {
  status: number
  validations: any
  constructor({
    message,
    validations,
  }: {
    message: string
    validations: Array<IError>
  }) {
    super(message)
    this.name = 'ValidationError'
    this.message = message
    this.status = 400
    this.validations = validations.map((error: IError) => ({
      name: error.name,
      message: error.message,
      ...(error.body ? { body: error.body } : {}),
    }))
  }
}
