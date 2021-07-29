import React, {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0)
    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne}>plus</button>
            <button onClick={setToZero}>zero</button>
        </div>
    )
}

/*
const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Hello name={"Ethan"} age={30}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>

    );
}

const Hello = ({name, age}) => {

    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old.
            </p>
            <p>
                So you were probably born in {bornYear()}
            </p>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => {
                return <Part name={part.name} exercises={part.exercises}/>
            })}
        </div>
    )
}

const Total = (props) => {
    let total = 0
    props.parts.forEach(part => {total += part.exercises})

    return (
        <p>Number of exercises {total}</p>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}
*/


export default App;
