import { useState } from "react";
import "./App.css";
import { JsonExplorer } from "./components/json-explorer";
import demoData from "./demo-data.json";
import secondDemoData from "./second-demo-data.json";

function App() {
    const [selectedProperty, setSelectedProperty] = useState<
        string | undefined
    >(undefined);
    return (
        <>
            <div className="input-area">
                <p>Property</p>
                <input></input>
                <p>{selectedProperty ?? "undefined"}</p>
            </div>

            <p>Response</p>
            <div className="explorer-container">
                <JsonExplorer
                    json={demoData}
                    setSelectedProperty={setSelectedProperty}
                />
            </div>

            {/* <p>Response</p>
            <div className="explorer-container">
                <JsonExplorer
                    json={secondDemoData}
                    setSelectedProperty={setSelectedProperty}
                />
            </div> */}
        </>
    );
}

export default App;
