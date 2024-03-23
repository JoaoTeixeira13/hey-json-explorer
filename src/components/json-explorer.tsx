//import { useState } from "react";
import "./json-explorer.css";
//import { tabSpacing } from "../styling-constants";
import { valueDisplayConverter } from "../utils/value-display-converter";

// interface JSONData<T> {
//     [key: string]: any;
// }

// type Props<T> = {
//     json: JSONData<T>; // Accepts a JSONData object with a generic type
// };

type Props = {
    json: {
        [key: string]: any;
    };
    setSelectedProperty: React.Dispatch<
        React.SetStateAction<string | undefined>
    >;
};

export const JsonExplorer = ({ json, setSelectedProperty }: Props) => {
    const entries = Object.entries(json);

    const handleKeyClick = (value: string | number | boolean) => {
        setSelectedProperty(value.toString());
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
                                    setSelectedProperty={setSelectedProperty}
                                />
                            }
                        </>
                    ) : (
                        <span>
                            {"\n"}
                            <span
                                onClick={() => handleKeyClick(value)}
                                className="clickable"
                            >
                                {/* {Number.isNaN(parseInt(key)) && `${key}:`} */}
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
