import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        if(isCorrect){
            console.log('you win')
            window.removeEventListener('keyup',handleKeyUp)
        }
        if(turn>5){
            console.log('out of guessess')
            window.removeEventListener('keyup',handleKeyUp)
        }
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])
   
    return (
        <div>
            <div>solution - {solution}</div>
            <div>current guess - {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}