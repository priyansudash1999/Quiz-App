import { motion } from "framer-motion"
import { useQuestionStore } from '../contexts/useQuestionStore'
import questions from "../data/questions.json"

const QuestionCard = ({qindex, onNext}: {qindex: number, onNext: () => void})=> {

  const ques = questions[qindex]
  const {answers, setAnswer} = useQuestionStore()

  return (
    <motion.div
      className='p-5 max-w-md mx-auto bg-white rounded-xl shadow'
      initial = {{opacity:0, y: 32}}
      animate = {{opacity:1, y: 0}}
      transition={{duration: 0.2}}
      aria-live='polite'
    >
      {/* Question and its difficulty level */}
      <div className='mb-6'>
        <h2 className='text-xl font-medium'>
           {ques.question}
        </h2>
        <span className='text-gray-500 text-sm'>
          {ques.difficulty}
        </span>
      </div>

      {/* Options */}
      <div className='flex flex-col gap-3 my-4'>
        {ques.options.map((option, ind) => (
          <motion.button
            key={ind}
            type='button'
            className={`h-11 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 text-base px-4 
            ${answers[ques.id]?.index === ind ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}
            `}
            whileTap={{scale: 1.08}}
            whileHover={{scale: 1.08}}
            onClick={() => setAnswer(ques.id, ind, ind === ques.correctAnswer)}
            aria-pressed = {answers[ques.id]?.index === ind}
          >
            {option}
          </motion.button>  
        ))}
      </div>

      {/* Next button */}
      <div className='flex justify-between items-center mt-6'>
        <span className='text-sm text-gray-500'>
          {qindex + 1}/{questions.length} Question
        </span>

        <button 
          disabled = {typeof answers[ques.id] === "undefined"}
          onClick={onNext}
          className={`py-2 px-5 rounded-lg font-medium transition
              ${typeof answers[ques.id] === 'undefined' ? "bg-gray-300 cursor-not-allowed opacity-60" : "bg-blue-600 text-white hover:bg-blue-700"}
            `}
        >
          Next
        </button>
      </div>
    </motion.div>
  )
}

export default QuestionCard