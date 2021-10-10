class TooManyRequestsError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "TooManyRequests";
    this.message = message;
    this.stack = new Error().stack;
    this.status = 429;
  }
}

export { TooManyRequestsError };
