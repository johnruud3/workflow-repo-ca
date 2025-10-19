import { describe, it, expect } from "../node_modules/vitest";
import { isActivePath } from "../js/utils/userInterface.js";


// If true the link should be active and get the correct styling
describe("isActivePath", () => {
  it("should return true if the path is the same as the current path", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("should return true when current path matches href exactly (non-root)", () => {
    expect(isActivePath("/register/", "/register/")).toBe(true);
  });

  it("should return true for root path '/' when current path is '/index.html'", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("should return true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/123")).toBe(true);
  });

  it("should return false when paths don't match", () => {
    expect(isActivePath("/login/", "/register/")).toBe(false);
  });
});