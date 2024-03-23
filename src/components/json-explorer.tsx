import "./json-explorer.css";
import { valueDisplayConverter } from "../utils/value-display-converter";
import { rootPath } from "../constants";

type Props = {
    json: {
        [key: string]: any;
    };
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
        setSelectedPath(`${rootPath}${key}`);
    };

    return (
        <>
            {entries.map(([key, value]) => (
                <span key={key} className="display-linebreak">
                    {typeof value === "object" ? (
                        <>
                            {Number.isNaN(parseInt(key)) && `\n${key}:`}
                            {
                                <JsonExplorer
                                    json={value}
                                    selectedPath={selectedPath}
                                    setSelectedProperty={setSelectedProperty}
                                    setSelectedPath={setSelectedPath}
                                />
                            }
                        </>
                    ) : (
                        <span>
                            {"\n"}
                            <span
                                onClick={() => handleKeyClick(value, key)}
                                className="clickable"
                            >
                                {`${key}:`}
                            </span>

                            <span>{valueDisplayConverter(value)}</span>
                        </span>
                    )}
                </span>
            ))}
        </>
    );
};
