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
    const [numbers, setNumbers] = useState([Math.floor(Math.random()*3),Math.floor(Math.random()*3)]);

    function changeNumbers() {
        let x = Array(2).fill().map(() => Math.floor(Math.random()*3));
        setNumbers(x);
    }

    return(
        <>
            {numbers.map((number) => (
                <>
                <p>{data[number].question}
                :{data[number].answer}</p>
                </>
            ))}
            <button onClick={changeNumbers}>change</button>
        </>
    )
}

export default Character;