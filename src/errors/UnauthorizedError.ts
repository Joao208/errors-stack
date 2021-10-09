class UnauthorizedError extends Error {
  status: number;
  constructor({ message, status = 401 }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
  }
}

export { UnauthorizedError };
