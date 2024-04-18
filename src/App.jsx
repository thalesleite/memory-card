import { useEffect, useState } from "react"
import "./App.css"
import Cards from "./components/Cards"

function App() {
  const [cards, setCards] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestCore] = useState(0)
  const [clicked, setClicked] = useState([])

  const textTitle = "Memory Card Game"
  const message =
    "Get points by clicking on an image but don't click on any more than once!"

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((response) => response.json())
      .then((data) => {
        const cardsArr = []
        for (let index = 0; index < data.message.length; index++) {
          cardsArr.push({ id: index, image: data.message[index] })
        }

        setCards(cardsArr)
      })
  }, [])

  function shuffleCards(arr) {
    return arr.sort(() => Math.random() - 0.8)
  }

  function handleClick(id) {
    const alreadyClicked = clicked.find((el) => el === id)
    if (alreadyClicked) {
      const best = score > bestScore ? score : bestScore
      setBestCore(best)
      setScore(0)
      setClicked([])
    } else {
      setScore((score) => score + 1)
      setClicked([...clicked, id])
    }

    const shuffled = shuffleCards(cards)
    setCards(shuffled)
  }

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

      <Cards data={cards} handleClick={handleClick} />
    </>
  )
}

export default App
