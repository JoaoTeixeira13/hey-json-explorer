export const valueDisplayConverter = (
    value: boolean | string | number
): string => {
    let valueDisplay = "";

    const shouldBeConverted =
        typeof value === "boolean" || typeof value === "number";

    const shouldBeDisplayedAsString = typeof value === "string";

    if (shouldBeConverted) {
        valueDisplay = ` ${value.toString()},`;
    }

    if (shouldBeDisplayedAsString) {
        valueDisplay = ` '${value}',`;
    }
    return valueDisplay;
};
