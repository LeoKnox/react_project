import { useState, useEffect } from 'react';

function Character() {
    const data = [
        {question:"one", answer:"ichi"},
        {question:"two", answer:"ni"},
        {question:"three", answer:"san"},
        {question:"four", answer:"yoh"},
        {question:"five", answer:"go"},
        {question:"six", answer:"roku"},
        {question:"seven", answer:"shichi"},
        {question:"eight", answer:"hachi"},
    ]
    const [numbers, setNumbers] = useState([
        Math.floor(Math.random()*8),
        Math.floor(Math.random()*8),
        Math.floor(Math.random()*8),
        Math.floor(Math.random()*8)
    ]);
    const [ans, setAns] = useState(data[Math.floor(Math.random()*8)].answer);

    function changeNumbers() {
        let x = Array(4).fill().map(() => Math.floor(Math.random()*8));
        setNumbers(x);
        setAns(x[Math.floor(Math.random()*8)]);
    }

    return(
        <>
            {numbers.map((number) => (
                <>
                <p>{data[number].question}
                :{data[number].answer}</p>
                </>
            ))}
            <h3>Answer: {ans}</h3>
            <button onClick={changeNumbers}>change</button>
        </>
    )
}

export default Character;