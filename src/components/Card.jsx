import "../styles/Card.css"

export default function Card({ card, handleClick }) {
  return (
    <div className="card">
      <img src={card.image} alt="" onClick={() => handleClick(card.id)} />
    </div>
  )
}
