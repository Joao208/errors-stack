import { QueryPropertyError } from "../../../src/errors/QueryPropertyError";

describe("[QueryPropertyError] test case", () => {
  it("QueryPropertyError should be instance of error", () => {
    expect(QueryPropertyError.prototype instanceof Error).toBeTruthy();
  });

  it("Should return the expected default properties", () => {
    const expected = {
      message: "Error case",
      name: "QueryPropertyError",
    };
    const error = new QueryPropertyError("Error case");
    expect(error.message).toBe(expected.message);
    expect(error.name).toBe(expected.name);
    expect(error.status).toBe(400);
  });
});
