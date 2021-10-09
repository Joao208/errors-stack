class QueryPropertyError extends Error {
  status: number;
  constructor(message, name = null) {
    super(message);
    this.name = name || this.constructor.name;
    this.message = message;
    this.status = 400;
  }
}

export { QueryPropertyError };
