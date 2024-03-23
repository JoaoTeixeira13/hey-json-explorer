import "./json-explorer.css";
import { valueDisplayConverter } from "../utils/value-display-converter";
import { getObjectOrArrayBracket } from "../utils/get-object-or-array-bracket";
import { isKeyNotIndex } from "../utils/is-key-index";

export type KeyValuePair = {
    [key: string]: any;
};

type Props = {
    json: KeyValuePair;
    selectedPath: string;
    setSelectedProperty: React.Dispatch<React.SetStateAction<string>>;
    setSelectedPath: React.Dispatch<React.SetStateAction<string>>;
};

export const JsonExplorer = ({
    json,
    selectedPath,
    setSelectedProperty,
    setSelectedPath,
}: Props) => {
    const entries = Object.entries(json);

    const handleKeyClick = (value: string | number | boolean, key: string) => {
        setSelectedProperty(value.toString());
        setSelectedPath(`${selectedPath}.${key}`);
    };

    return (
        <pre>
            {entries.map(([key, value]) => (
                <span key={key} className="display-linebreak">
                    {typeof value === "object" ? (
                        <>
                            {isKeyNotIndex(key) && `${key}:`}

                            <span>{getObjectOrArrayBracket(value, true)}</span>

                            {
                                <JsonExplorer
                                    json={value}
                                    selectedPath={`${selectedPath}${
                                        isKeyNotIndex(key)
                                            ? `.${key}`
                                            : `[${key}]`
                                    }`}
                                    setSelectedProperty={setSelectedProperty}
                                    setSelectedPath={setSelectedPath}
                                />
                            }
                            <span>{getObjectOrArrayBracket(value, false)}</span>
                        </>
                    ) : (
                        // Arrays of primitive values are not clickable,
                        //but searchable (out of scope)
                        <span>
                            <span
                                onClick={() => handleKeyClick(value, key)}
                                className="clickable"
                            >
                                {isKeyNotIndex(key) && `${key}:`}
                            </span>

                            <span>{valueDisplayConverter(value)}</span>
                        </span>
                    )}
                </span>
            ))}
        </pre>
    );
};
