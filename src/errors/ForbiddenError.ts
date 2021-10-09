class ForbiddenError extends Error {
  status: number;
  constructor(message) {
    super(message);
    this.name = "ForbiddenError";
    this.message = message;
    this.stack = new Error().stack;
    this.status = 403;
  }
}

export { ForbiddenError };
