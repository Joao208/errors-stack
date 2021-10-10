import { ValidationError } from "../../../src/errors/ValidationError";

describe("[ValidationError] test case", () => {
  it("ValidationError should be instance of error", () => {
    expect(ValidationError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "ValidationError"
    };
    const error = new ValidationError({ message: "Error case", validations: [] });
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(400);
  });
});
