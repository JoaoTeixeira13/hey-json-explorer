//solution based on https://stackoverflow.com/questions/55119963/why-can-i-access-object-property-with-an-array

import { KeyValuePair } from "../components/json-explorer";
import { undefinedDisplay } from "../constants";

export const readJsonProperties = (json: KeyValuePair, string: string) => {
    let returnValue = undefinedDisplay;
    let jsonCopy = { ...json };

    string = string.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
    string = string.replace(/^\./, ""); // strip a leading dot

    const objectNotationSections = string.split(".");
    for (
        let i = 0, sections = objectNotationSections.length;
        i < sections;
        ++i
    ) {
        let key = objectNotationSections[i];
        if (key in jsonCopy) {
            jsonCopy = jsonCopy[key];
        } else {
            return;
        }
    }

    // in case we wish to display Array or Object Values we can run an additional check here
    // and apply JSON.stringify(jsonCopy) (out of scope)

    const shouldBeConverted =
        typeof jsonCopy === "string" ||
        typeof jsonCopy === "boolean" ||
        typeof jsonCopy === "number";

    if (shouldBeConverted) {
        returnValue = jsonCopy.toString();
    }
    return returnValue;
};
