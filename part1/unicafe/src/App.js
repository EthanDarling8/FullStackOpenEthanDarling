import React, {useState} from "react";

function App() {
    // Save clicks of each button to it's own state.
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            Hello Unicafe
        </div>
    )

}

export default App;
