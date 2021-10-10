import { NotFoundError } from "../../../src/errors/NotFoundError";

describe("[NotFoundError] test case", () => {
  it("NotFoundError should be instance of error", () => {
    expect(NotFoundError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "NotFoundError",
    };
    const error = new NotFoundError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(404);
  });
});
