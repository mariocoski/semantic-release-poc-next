import { DEFAULT_PORT_NUMBER, PORT_NUMBER } from "./config";

describe("Server", () => {
  it("defines default port number", () => {
    expect(DEFAULT_PORT_NUMBER).toBe(3000);
  });

  it("defines port number", () => {
    expect(PORT_NUMBER).toBe(6000);
  });
});
