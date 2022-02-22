class UnauthorizedError extends Error {
  status: number;
  constructor({ message, status = 401 }: { message: string; status?: number }) {
    super(message);
    this.name = "UnauthorizedError";
    this.message = message;
    this.status = status;
  }
}

export { UnauthorizedError };
