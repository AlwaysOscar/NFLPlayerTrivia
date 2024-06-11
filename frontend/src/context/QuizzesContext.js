import { createContext, useReducer } from 'react'

export const QuizzesContext = createContext()

export const quizzesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUIZZES':
      return { 
        quizzes: action.payload 
      }
    case 'CREATE_QUIZ':
      return { 
        quizzes: [action.payload, ...state.quizzes] 
      }
    case 'DELETE_QUIZ':
      return { 
        quizzes: state.quizzes.filter(q => q._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const QuizzesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizzesReducer, { 
    quizzes: null
  })
  
  return (
    <QuizzesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </QuizzesContext.Provider>
  )
}