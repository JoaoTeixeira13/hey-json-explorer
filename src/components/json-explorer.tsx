import "./json-explorer.css";
import { NestedElement } from "./nested-element";
import { InlineElement } from "./inline-element";

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
            {entries.map(([key, value], index) => (
                <span key={key} className="display-linebreak">
                    {typeof value === "object" ? (
                        <NestedElement
                            value={value}
                            keyValue={key}
                            selectedPath={selectedPath}
                            setSelectedPath={setSelectedPath}
                            setSelectedProperty={setSelectedProperty}
                        />
                    ) : (
                        // Arrays of primitive values are not clickable,
                        //but searchable (out of scope)
                        <InlineElement
                            value={value}
                            keyValue={key}
                            handleKeyClick={handleKeyClick}
                        />
                    )}
                    {index !== entries.length - 1 && ","}
                </span>
            ))}
        </pre>
    );
};
