class UnknownError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "UnknownError";
    this.message = message;
    this.stack = new Error().stack;
    this.status = 500;
  }
}

export { UnknownError };
