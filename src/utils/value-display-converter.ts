import { singleSpacing } from "../styling-constants";

export const valueDisplayConverter = (
    value: boolean | string | number
): string => {
    let valueDisplay = "";

    const shouldBeConverted =
        typeof value === "boolean" || typeof value === "number";

    const shouldBeDisplayedAsString = typeof value === "string";

    if (shouldBeConverted) {
        valueDisplay = `${singleSpacing}${value.toString()},`;
    }

    if (shouldBeDisplayedAsString) {
        valueDisplay = `${singleSpacing}'${value}',`;
    }
    return valueDisplay;
};
