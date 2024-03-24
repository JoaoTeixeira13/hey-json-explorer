export const isKeyNotIndex = (key: string): boolean => {
    return Number.isNaN(parseInt(key));
};
