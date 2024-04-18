import Card from "../components/Card"
import "../styles/Cards.css"

export default function Cards({ data, handleClick }) {
  return (
    <div className="cards">
      {data.map((card, index) => {
        return <Card key={index} card={card} handleClick={handleClick} />
      })}
    </div>
  )
}
