import { useState, useEffect } from 'react'
import './styles/App.scss'
import { GetRandomDateString } from "./helpers/Helpers"

const App = () => {
  const [RandomDateArray/*, setRandomDateString*/] = 
    useState<[number, string, number, number]>(GetRandomDateString())
  const [GuessVal, setGuessVal] = useState</*number | */string>('')
  const [GuessRes, setGuessRes] = useState<string>('')

  const EvaluateGuess = (val: number) => {
    if (val === 7) {
      val = 0
    }
    if (val === RandomDateArray[0]) {
      setGuessRes('Right')
    } else {
      setGuessRes('Wrong')
    }
  }

  /*
  const handleOnEnterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    console.log('set before evaluating: ', val)
    setGuessVal(val)
  }
  */

  const handleButtonClick = (number: number) => {
    setGuessVal(number.toString())
  }

  const handleReset = () => {
    const newRandomDateArray = GetRandomDateString()
    setGuessVal('')
    setGuessRes('')
    let i = -1
    while (++i < 4) {
      RandomDateArray[i] = newRandomDateArray[i]
    }
    // RandomDateArray[1] = newRandomDateArray[1]
    // RandomDateArray[2] = newRandomDateArray[2]
    // RandomDateArray[3] = newRandomDateArray[3]
  }

  useEffect(() => {
    // EvaluateGuess(GuessVal) // bug
    if (GuessVal) {
      EvaluateGuess(parseInt(GuessVal))
    }
  }, [GuessVal])
  

  return (
    <>
      <h3 className='QuestionDiv'>
        { `${RandomDateArray[1]} ${RandomDateArray[2]}, ${RandomDateArray[3]}` }
      </h3>
      <div className='GuessingDiv'>
        <label htmlFor='GuessBar'>Your Guess:</label>
        {/* <input id='GuessBar' type='number' onChange={handleOnEnterInput}/> */}
        &nbsp;
        <div> { GuessRes } </div>
      </div>
      <div className='btn-group-div'>
        {[1, 2, 3, 4, 5, 6, '日'].map((number) => (
          <button key={ number } onClick={() => handleButtonClick(number)}>
            {number}
          </button>
        ))}
        <button onClick={ handleReset }>Reset</button>
      </div>
      {/* <label className="switch">
        <input type="checkbox"/>
        <span className="slider"></span>
      </label> */}
    </>
  )
}

export default App 
