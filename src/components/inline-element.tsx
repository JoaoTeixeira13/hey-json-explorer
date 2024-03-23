import { isKeyNotIndex } from "../utils/is-key-index";
import { valueDisplayConverter } from "../utils/value-display-converter";

type Props = {
    value: string | number | boolean;
    keyValue: string;
    handleKeyClick: (value: string | number | boolean, key: string) => void;
};

export const InlineElement = ({ value, keyValue, handleKeyClick }: Props) => {
    return (
        <>
            <span
                onClick={() => handleKeyClick(value, keyValue)}
                className="clickable"
            >
                {isKeyNotIndex(keyValue) && `${keyValue}:`}
            </span>

            {valueDisplayConverter(value)}
        </>
    );
};
