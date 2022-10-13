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
    const [numbers, setNumbers] = useState([Math.random()*3,Math.random()*3])

    return(
        <>
            <h3>{data[1].question}:</h3>
            <p>{data[1].answer}:</p>
            <p>{numbers}</p>
        </>
    )
}

export default Character;