import "./CardLeft.scss"
const CardLeft = ({id, img, number, title, first_text, second_text}) => {
    return (
      <section id={id} className="container-left">
        <div className="problema-txt">
          <h3 className="number-section">{number}</h3>
          <h4 className="title-section">{title}</h4>
          <p className="descricao">
            {first_text}
          </p>
          <p className="descricao">
            {second_text}
          </p>
        </div>
  
        <div className="problema-img">
          <img
            src={img}
            alt=""
          />
        </div>
      </section>
    )
  }
  
  export default CardLeft
  