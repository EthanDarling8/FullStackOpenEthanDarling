import React, {useState} from "react";

function App() {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(7).fill(0))
    const [highestAnecdote, setHighestAnecdote] = useState(" ")
    const [highestVotes, setHighestVotes] = useState(0)

    const handleAnecdote = () => {
        let result = randInt(0, anecdotes.length - 1)
        // console.log(result)
        console.log("votes: ", votes)
        setSelected(result)
        checkHighestVote()
    }

    const handleVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        // console.log("copy: ", copy)
        setVotes(copy)
        checkHighestVote()
    }

    const checkHighestVote = () => {
        let temp = 0;
        for (let i = 0; i < votes.length; i++) {
            if (votes[i] > temp) {
                temp = votes[i]
                setHighestAnecdote(anecdotes[i])
                setHighestVotes(temp)
            }
        }
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>Has {votes[selected]} votes</p>
            <Button clickHandler={handleVote} text={"Vote"}/>
            <Button clickHandler={handleAnecdote} text={"Next Anecdote"}/>

            <h1>Anecdote with the most votes</h1>
            <p>{highestAnecdote}</p>
            <p>{highestAnecdote !== " " ? "Has " + highestVotes + " votes": "No votes cast yet."}</p>
        </div>
    )
}

const Button = ({clickHandler, text }) => (
    <button onClick={clickHandler}>{text}</button>
)

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default App;
