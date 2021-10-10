import { UnauthorizedError } from "../../../src/errors/UnauthorizedError";

describe("[UnauthorizedError] test case", () => {
  it("UnauthorizedError should be instance of error", () => {
    expect(UnauthorizedError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "UnauthorizedError",
      status: 421,
    };

    const error = new UnauthorizedError({ message: "Error case", status: 421 });
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(expected.status);
  });
});
