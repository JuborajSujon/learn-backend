import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface TQuiz {
  question: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  quizComplete: boolean;
}

const initialState: TQuiz = {
  question: quizData,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.question.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },

    completedQuiz: (state) => {
      state.quizComplete = true;
    },
  },
});

export const { setAnswer, nextQuestion, previousQuestion, completedQuiz } =
  quizSlice.actions;

export const selectQuiz = (state: RootState) => state.quiz;

export default quizSlice.reducer;
