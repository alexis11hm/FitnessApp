import React, { Component } from "react";
import exerciseImage from "../assets/images/exercise.png";
import circleImage from "../assets/images/circles.png";
import "./styles/Card.css";

class Card extends Component {
  /*CONSTRUCTOR: 
    1) inicializa el estado del componente
    2) enlaza eventos
    3) setea variables globales*/
  constructor(props) {
    super(props);
    this.state = {
      image:
        "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc",
    };
  }
  /* 
  componentWillMount()
  1) modifica el estado
  2) no realiza llamados a API´s
  3) No realiza suscripciones a eventos
  4) Se ejecuta  antes de que el componente se monte
  */

  /* 
  componentDidMount()
  1) modifica el estado
  2) mejor momento para llamar API´s
  3) realiza suscripciones a eventos
  4) Se invoca una vez el componente sea montado
  */
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        image:
          "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
      });
    }, 5000);
  }

  /*
  componentWillReceiveProps(nextProps)
  1)Realiza cambios en los estados basado en las nuevas propiedades
  2) Se ejecuta despues de que el componente recive propiedades
  */

  /*
  shouldComponentUpdate(nextProps, nextState)
  1)Validar si queremos renderizar o no el componente
  */

  /*
  componentWillUpdate(nextProps, nextState)
  1) Realiza cualquier tipo de preparacion antes de que se actualice la UI
  */

  /*
  componentDidUpdate(prevProps, prevState)
  1) Interactuar con el dom
  */

  /*
  componentWillUnmount()
  1)dejar de escuchar eventos
  2) Desuscribirse de un WebSocket
  3) Cancelar peticiones HTTP
  */

  /*
  componentDidCatch()
  1) control de errores
  */

  render() {
    const { title, description, img, leftColor, rightColor } = this.props;

    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circleImage}), linear-gradient(to right, 
            ${leftColor}, ${rightColor})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img} className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
