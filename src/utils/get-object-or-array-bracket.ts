import { KeyValuePair } from "../components/json-explorer";
import { Bracket } from "../constants";

export const getObjectOrArrayBracket = (
    value: any[] | KeyValuePair,
    openingBracket: boolean
): Bracket => {
    let bracket = Bracket.ArrayOpen;
    const isArray = value.constructor === Array;

    if (isArray && !openingBracket) {
        bracket = Bracket.ArrayClose;
    }
    if (!isArray && openingBracket) {
        bracket = Bracket.ObjectOpen;
    }
    if (!isArray && !openingBracket) {
        bracket = Bracket.ObjectClose;
    }
    return bracket;
};
