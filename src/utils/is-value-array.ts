import { KeyValuePair } from "../components/json-explorer";

export const isValueArray = (value: any[] | KeyValuePair): boolean => {
    return value.constructor === Array;
};
