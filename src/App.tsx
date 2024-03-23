import { useEffect, useState } from "react";
import "./App.css";
import { JsonExplorer, KeyValuePair } from "./components/json-explorer";
import demoData from "./test-data/demo-data.json";
import secondDemoData from "./test-data/second-demo-data.json";
import { readJsonProperties } from "./utils/read-json-properties";
import { initialSearchValue, rootPath, undefinedDisplay } from "./constants";

function App() {
    //for experiment with different data types we can initialize our json here
    //for an alternativite test case initialize the json as 'secondDemoData

    const [json] = useState<KeyValuePair>(demoData);

    const [selectedProperty, setSelectedProperty] = useState<string>("");

    const [selectedPath, setSelectedPath] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        searchValue.length < 4 && setSelectedProperty(undefinedDisplay);
        searchValue === "" && setSelectedProperty("");

        if (searchValue.startsWith(rootPath)) {
            const searchPath = searchValue.replace(rootPath, "");
            const foundResult = readJsonProperties(json, searchPath);

            setSelectedProperty(foundResult ?? undefinedDisplay);
        }
    }, [searchValue]);

    useEffect(() => {
        setSearchValue(selectedPath);
    }, [selectedPath]);

    return (
        <>
            <div className="input-area">
                <p>Property</p>
                <input
                    value={searchValue}
                    onChange={(e) => {
                        setSelectedPath(e.target.value);
                        setSearchValue(e.target.value);
                    }}
                />
                {selectedProperty && <p>{selectedProperty}</p>}
            </div>

            <p>Response</p>
            <div className="explorer-container">
                <JsonExplorer
                    json={json}
                    selectedPath={initialSearchValue}
                    setSelectedProperty={setSelectedProperty}
                    setSelectedPath={setSelectedPath}
                />
            </div>
        </>
    );
}

export default App;
