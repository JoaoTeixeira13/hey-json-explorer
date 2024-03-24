import { isValueArray } from "./is-value-array";

describe("isValueArray", () => {
    it("should return true for an array", () => {
        const result = isValueArray([]);
        expect(result).toBe(true);
    });

    it("should return true for an array with elements", () => {
        const result = isValueArray([1, 2, 3]);
        expect(result).toBe(true);
    });

    it("should return false for an object", () => {
        const result = isValueArray({ key: "value" });
        expect(result).toBe(false);
    });
});
