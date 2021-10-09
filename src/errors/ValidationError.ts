class ValidationError extends Error {
  status: number;
  validations: any;
  constructor(message, validations) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = 400;
    this.validations = validations.map((error) => ({
      name: error.name,
      message: error.message,
      ...(error.body ? { body: error.body } : {}),
    }));
  }
}

export { ValidationError };
