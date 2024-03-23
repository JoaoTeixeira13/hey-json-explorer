import "./App.css";
import { JsonExplorer } from "./components/json-explorer";
import demoData from "./demo-data.json";
import secondDemoData from "./second-demo-data.json";

function App() {
    return (
        <>
            <p>Response</p>
            <div className="explorer-container">
                <JsonExplorer json={demoData} />
            </div>

            <p>Response</p>
            <div className="explorer-container">
                <JsonExplorer json={secondDemoData} />
            </div>
        </>
    );
}

export default App;
