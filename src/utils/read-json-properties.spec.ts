import { readJsonProperties } from "./read-json-properties";

describe("readJsonProperties", () => {
    const json = {
        foo: {
            bar: {
                baz: "value",
            },
            arr: [1, 2, 3],
        },
        bool: true,
        num: 42,
        str: "hello",
    };

    it("should return undefined if property does not exist", () => {
        const result = readJsonProperties(json, "nonexistent");
        expect(result).toBeUndefined();
    });

    it("should return undefined for an empty string", () => {
        const result = readJsonProperties(json, "");
        expect(result).toBeUndefined();
    });

    it("should return the value of a nested property", () => {
        const result = readJsonProperties(json, "foo.bar.baz");
        expect(result).toBe("value");
    });

    test("should handle array indexing", () => {
        const result = readJsonProperties(json, "foo.arr[0]");
        expect(result).toBe("1");
    });

    it("should return string value as is", () => {
        const result = readJsonProperties(json, "str");
        expect(result).toBe("hello");
    });

    it("should return boolean value as string", () => {
        const result = readJsonProperties(json, "bool");
        expect(result).toBe("true");
    });

    it("should return number value as string", () => {
        const result = readJsonProperties(json, "num");
        expect(result).toBe("42");
    });

    it("should return undefined if intermediate property is an array", () => {
        const result = readJsonProperties(json, "foo.arr.baz");
        expect(result).toBeUndefined();
    });

    it("should handle root level property", () => {
        const result = readJsonProperties(json, "str");
        expect(result).toBe("hello");
    });
});
