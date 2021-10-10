import { TooManyRequestsError } from "../../../src/errors/TooManyRequestError";

describe("[TooManyRequestsError] test case", () => {
  it("TooManyRequestsError should be instance of error", () => {
    expect(TooManyRequestsError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "TooManyRequests",
    };
    const error = new TooManyRequestsError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(429);
  });
});
