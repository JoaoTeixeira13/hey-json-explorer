import { KeyValuePair } from "../components/json-explorer";

export const getObjectOrArrayBracket = (
    value: any[] | KeyValuePair,
    openingBracket: boolean
) => {
    let bracket = "[";
    const isArray = value.constructor === Array;

    if (isArray && !openingBracket) {
        bracket = "],";
    }
    if (!isArray && openingBracket) {
        bracket = "{";
    }
    if (!isArray && !openingBracket) {
        bracket = "},";
    }
    return bracket;
};
