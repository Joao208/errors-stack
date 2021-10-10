import { ForbiddenError } from "../../../src/errors/ForbiddenError";

describe("[ForbiddenError] test case", () => {
  it("ForbiddenError should be instance of error", () => {
    expect(ForbiddenError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "ForbiddenError",
    };
    const error = new ForbiddenError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(403);
  });
});
