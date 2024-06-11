import { QuizzesContext } from "../context/QuizzesContext"
import { useContext } from "react"

export const useQuizzesContext = () => {
  const context = useContext(QuizzesContext)

  if(!context) {
    throw Error('useQuizzesContext must be used inside a QuizzesContextProvider')
  }

  return context
}