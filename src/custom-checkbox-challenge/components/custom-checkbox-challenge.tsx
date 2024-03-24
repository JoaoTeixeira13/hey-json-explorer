import { Checkmark } from "./checkmark";

export const CustomCheckboxChallenge = () => {
    return (
        <>
            <input
                type="checkbox"
                onChange={() => {
                    console.log("checking box");
                }}
            />
            <Checkmark />
        </>
    );
};
