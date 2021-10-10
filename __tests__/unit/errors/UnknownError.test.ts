import { UnknownError } from "../../../src/errors/UnknownError";

describe("[UnknownError] test case", () => {
  it("UnknownError should be instance of error", () => {
    expect(UnknownError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "UnknownError",
    };
    const error = new UnknownError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(500);
  });
});
