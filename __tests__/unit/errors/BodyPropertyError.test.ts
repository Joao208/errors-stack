import { BodyPropertyError } from "../../../src/errors/BodyPropertyError";

describe("[BodyPropertyError] test case", () => {
  it("BodyPropertyError should be instance of error", () => {
    expect(BodyPropertyError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "BodyPropertyError",
    };
    const error = new BodyPropertyError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(400);
  });
});
