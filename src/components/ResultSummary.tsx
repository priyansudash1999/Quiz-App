import {motion} from "framer-motion"
import { useQuestionStore } from "../contexts/useQuestionStore"
import questions from "../data/questions.json"

const ResultSummary = () => {

  const {answers} = useQuestionStore()
  const score = Object.values(answers).filter((a) => a.correct).length

  return (
    <motion.div
      initial = {{opacity:0, y: 32}}
      animate = {{opacity:1, y: 0}}
      className="bg-white max-w-md mx-auto rounded-xl shadow p-5"
      aria-live="polite"
    >
      <h2 className="text-2xl font-bold mb-4">Your Result</h2>
      <div className="mb-4">
        Score: <span className={`${score >= 3 ? "text-green-700" : "text-red-500"}`}>
          {score}/{questions.length}
        </span>
      </div>

      <div>
        {
          questions.map((ques,ind) => (
            <motion.div
            key={ind}
              className="p-3 mb-4 border rounded"
              initial = {{opacity: 0, x: 32}}
              animate = {{opacity: 1, x: 0}}
              transition= {{delay: ind * 0.15}}
            >
              <div className="flex gap-2 items-center mb-1">
                <span className="font-semibold">
                  {ques.question}
                </span>
                <span 
                  className={`rounded px-2 py-1 text-sm ml-2 ${answers[ques.id]?.correct ? "bg-[#00B75F] text-white": "bg-[#FF9D33] text-white"}`}
                  data-level={answers[ques.id]?.correct ? "correct" : "Incorrect"}
                >
                  {answers[ques.id]?.correct ? "Correct": "Incorrect"}
                </span>
                <span className="ml-2 text-xs text-gray-500">{ques.difficulty}</span>
                <span className="ml-2 text-xs text-blue-700">+{ques.points}pts</span>
              </div>

              <div className="text-sm text-gray-700 mb-2">
                <span>
                  Your answer: {typeof answers[ques.id]?.index === 'number' ? ques.options[answers[ques.id].index]: "-"}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Explanation: {ques.explanation}
              </div>
            </motion.div>
          ))
        }
      </div>

    </motion.div>
  )
}

export default ResultSummary