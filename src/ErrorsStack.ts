interface Params {
  name: string
  message: string
  status?: number
}

export function ErrorsStack(params: Params) {
  return class PersonalizedError extends Error {
    status: number | undefined
    errorParams: any

    constructor({
      message,
      status,
      errorParams,
    }: {
      message?: string
      status?: number
      errorParams?: any
    }) {
      super(message)
      this.name = params.name
      this.message = message || params.message
      this.status = status || params.status || 400
      this.errorParams = errorParams
    }
  }
}
