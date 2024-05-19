import "./CardRight.scss"
const CardRight = ({id, img, number, title, first_text, second_text}) => {
    return (
      <section id={id} className="container-right">
        <div className="public-img">
          <img
            src={img}
            alt=""
          />
        </div>
  
        <div className="public-txt">
          <h3 className="number-section">{number}</h3>
          <h4 className="title-section">{title}</h4>
          <p className="descricao">
            {first_text}
          </p>
          <p className="descricao">
            {second_text}
          </p>
        </div>
      </section>
    )
  }
  
  export default CardRight
  