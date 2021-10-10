class HealthError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "HealthError";
    this.message = message;
    this.status = 500;
  }
}

export { HealthError };
