import { useEffect, useState } from "react"
import "./App.css"
import Cards from "./components/Cards"

function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestCore] = useState(0)

  const textTitle = "Memory Card Game"
  const message =
    "Get points by clicking on an image but don't click on any more than once!"

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.message)
      })
  }, [])

  return (
    <>
      <div className="header">
        <h1>{textTitle}</h1>
        <h3>{message}</h3>
      </div>

      <div className="scores">
        <h4>Score: {score}</h4>
        <h4>Best Score: {bestScore}</h4>
      </div>

      <Cards data={cards} />
    </>
  )
}

export default App
