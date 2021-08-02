import React, {useState} from "react";

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
        setAverage((good + (0 - bad)) / all)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
        setAverage((good + (0 - bad)) / all)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
        setAverage((good + (0 - bad)) / all)
    }

    if (all <= 0) {
        return (
            <div>
                <h1>Give Feedback</h1>
                <Button clickHandler={handleGoodClick} text={"Good"}/>
                <Button clickHandler={handleNeutralClick} text={"Neutral"}/>
                <Button clickHandler={handleBadClick} text={"Bad"}/>

                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button clickHandler={handleGoodClick} text={"Good"}/>
            <Button clickHandler={handleNeutralClick} text={"Neutral"}/>
            <Button clickHandler={handleBadClick} text={"Bad"}/>

            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}/>
        </div>
    )

}

const Statistics = (props) => {
    return (
        <div>
            <table>
                <thead>
                </thead>
                <tbody>
                <StatisticLine name={"Good"} stat={props.good}/>
                <StatisticLine name={"Neutral"} stat={props.neutral}/>
                <StatisticLine name={"Bad"} stat={props.bad}/>
                <StatisticLine name={"All"} stat={props.all}/>
                <StatisticLine name={"Average"} stat={props.average}/>
                <StatisticLine name={"Positive"} stat={props.good / props.all}/>
                </tbody>
            </table>
        </div>
    )
}

const StatisticLine = ({name, stat}) => {
    let text = stat
    if (name === "Positive") {
        text = stat + " %"
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{text}</td>
        </tr>
    )
}

const Button = ({clickHandler, text}) => (
    <button onClick={clickHandler}>{text}</button>
)

export default App;
