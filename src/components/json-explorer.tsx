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
};

export const JsonExplorer = ({ json }: Props) => {
    const entries = Object.entries(json);

    const handleKeyClick = (key: string, value: any) => {
        console.log(
            "clicked on following key:",
            key,
            "with following value:",
            value
        );
    };

    return (
        <>
            {entries.map(([key, value]) => (
                <span key={key} className="display-linebreak">
                    {typeof value === "object" ? (
                        <>
                            {Number.isNaN(parseInt(key)) && `\n${key}:`}
                            {<JsonExplorer json={value} />}
                        </>
                    ) : (
                        <span>
                            {"\n"}
                            <span
                                onClick={() => handleKeyClick(key, value)}
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
