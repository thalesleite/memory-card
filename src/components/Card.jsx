import "../styles/Card.css"

export default function Card({ card }) {
  return (
    <div className="card">
      <img src={card} alt="" />
    </div>
  )
}
