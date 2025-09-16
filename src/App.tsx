import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import questions from "./data/questions.json"
import "./index.css"

const App = () => {

  const [step, setStep] = useState(0)

  const handleNext = () => {
    if(step < questions.length-1){
      setStep(step+1)
    }
    else{
      setStep(questions.length)
    }
  }

  return (
    <main className='min-h-screen bg-gray-50 py-10'>
      <div className='sticky bottom-0 z-10'>
        <QuestionCard  qindex={step} onNext={handleNext}/>
      </div>
    </main>
  )
}

export default App