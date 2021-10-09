class InternalServiceError extends Error {
  status: number;
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = 503;
  }
}

export { InternalServiceError };
