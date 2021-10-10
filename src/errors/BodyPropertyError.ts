class BodyPropertyError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "BodyPropertyError";
    this.message = message;
    this.status = 400;
  }
}

export { BodyPropertyError };
