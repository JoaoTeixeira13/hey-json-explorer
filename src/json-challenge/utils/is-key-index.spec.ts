import { isKeyNotIndex } from "./is-key-index";

describe("isKeyNotIndex", () => {
    it("should return true for non-numeric string", () => {
        const result = isKeyNotIndex("key");
        expect(result).toBe(true);
    });

    it("should return true for empty string", () => {
        const result = isKeyNotIndex("");
        expect(result).toBe(true);
    });

    it("should return true for string containing non-numeric characters", () => {
        const result = isKeyNotIndex("abc123");
        expect(result).toBe(true);
    });

    it("should return false for numeric string", () => {
        const result = isKeyNotIndex("123");
        expect(result).toBe(false);
    });

    it("should return false for string representing zero", () => {
        const result = isKeyNotIndex("0");
        expect(result).toBe(false);
    });
});
