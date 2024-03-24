import { valueDisplayConverter } from "./value-display-converter";

describe("valueDisplayConverter", () => {
    it("should return boolean value as string", () => {
        const result = valueDisplayConverter(true);
        expect(result).toBe(" true,");
    });

    it("should return number value as string", () => {
        const result = valueDisplayConverter(42);
        expect(result).toBe(" 42,");
    });

    it("should return string value as string", () => {
        const result = valueDisplayConverter("hello");
        expect(result).toBe(" 'hello',");
    });
});
