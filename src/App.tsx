import "./App.css";
import { CustomCheckboxChallenge } from "./custom-checkbox-challenge/components/custom-checkbox-challenge";
import { JsonChallenge } from "./json-challenge/components/json-challenge";

function App() {
    return (
        <>
            <h2>1. Json Explorer</h2>
            <JsonChallenge />
            <h2>2. Custom Checkbox</h2>
            <CustomCheckboxChallenge />
        </>
    );
}

export default App;
