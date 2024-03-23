import { getObjectOrArrayBracket } from "../utils/get-object-or-array-bracket";
import { isKeyNotIndex } from "../utils/is-key-index";
import { JsonExplorer, KeyValuePair } from "./json-explorer";

type Props = {
    value: any[] | KeyValuePair;
    keyValue: string;
    selectedPath: string;
    setSelectedProperty: React.Dispatch<React.SetStateAction<string>>;
    setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
};

export const NestedElement = ({
    value,
    keyValue,
    selectedPath,
    setSelectedProperty,
    setSelectedPath,
}: Props) => {
    return (
        <>
            {isKeyNotIndex(keyValue) && `${keyValue}:`}

            {getObjectOrArrayBracket(value, true)}

            {
                <JsonExplorer
                    json={value}
                    selectedPath={`${selectedPath}${
                        isKeyNotIndex(keyValue)
                            ? `.${keyValue}`
                            : `[${keyValue}]`
                    }`}
                    setSelectedProperty={setSelectedProperty}
                    setSelectedPath={setSelectedPath}
                />
            }
            {getObjectOrArrayBracket(value, false)}
        </>
    );
};
