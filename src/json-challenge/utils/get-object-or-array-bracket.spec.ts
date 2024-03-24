import { Bracket } from "../constants";
import { getObjectOrArrayBracket } from "./get-object-or-array-bracket";

describe("getObjectOrArrayBracket", () => {
    it("should return ArrayOpen bracket if value is an array and openingBracket is true", () => {
        const result = getObjectOrArrayBracket([], true);
        expect(result).toBe(Bracket.ArrayOpen);
    });

    it("should return ArrayClose bracket if value is an array and openingBracket is false", () => {
        const result = getObjectOrArrayBracket([], false);
        expect(result).toBe(Bracket.ArrayClose);
    });

    it("should return ObjectOpen bracket if value is not an array and openingBracket is true", () => {
        const result = getObjectOrArrayBracket({}, true);
        expect(result).toBe(Bracket.ObjectOpen);
    });

    it("should return ObjectClose bracket if value is not an array and openingBracket is false", () => {
        const result = getObjectOrArrayBracket({}, false);
        expect(result).toBe(Bracket.ObjectClose);
    });

    it("should handle KeyValuePair correctly", () => {
        const keyValuePair = { key: "value" };
        const result = getObjectOrArrayBracket(keyValuePair, true);
        expect(result).toBe(Bracket.ObjectOpen);
    });

    it("should handle arrays with KeyValuePair elements correctly", () => {
        const keyValuePairArray = [{ key: "value" }];
        const result = getObjectOrArrayBracket(keyValuePairArray, true);
        expect(result).toBe(Bracket.ArrayOpen);
    });
});
