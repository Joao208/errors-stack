import { ParamPropertyError } from "../../../src/errors/ParamPropertyError";

describe("[ParamPropertyError] test case", () => {
  it("ParamPropertyError should be instance of error", () => {
    expect(ParamPropertyError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "ParamPropertyError",
    };
    const error = new ParamPropertyError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(400);
  });
});
