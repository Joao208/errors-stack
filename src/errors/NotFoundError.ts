class NotFoundError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
    this.message = message;
    this.stack = new Error().stack;
    this.status = 404;
  }
}

export { NotFoundError };
