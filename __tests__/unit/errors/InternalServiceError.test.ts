import { InternalServiceError } from "../../../src/errors/InternalServiceError";

describe("[InternalServiceError] test case", () => {
  it("InternalServiceError should be instance of error", () => {
    expect(InternalServiceError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "InternalServiceError",
    };
    const error = new InternalServiceError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(503);
  });
});
