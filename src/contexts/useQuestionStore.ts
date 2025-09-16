import { create } from "zustand";

type Answer = { index: number; correct: boolean}

interface QuestionState {
  answers: Record<string, Answer>;
  setAnswer: (qid: string, index: number, correct: boolean) => void
}

export const useQuestionStore = create<QuestionState>((set) => (
  {
    answers: {},
    setAnswer: (qid, index, correct) => 
      set((state)=> (
        {
          answers: { ...state.answers, [qid]: {index, correct}}
        }
      ))
  }
))