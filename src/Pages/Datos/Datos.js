import React from "react";
import { Panel, Divider, Icon } from "rsuite";
import Habilidades from "../../Components/Habilidades/Habilidades";
import "./Datos.css";

class Datos extends React.Component {
  // constructor(props) {
  //     super(props);

  // }

  render() {
    return (
      <Panel shaded bodyFill className="sidebar">
        <div
          style={{
            position: "relative",
            float: "left",
            display: "block",
          }}
        >
          <img
            src="https://rapoporras.com/assets/img/gamer.jpg"
            className="imgportada"
            alt="imgportada_rapoporras"
          />
          <img
            src="https://rapoporras.com/assets/img/perfil.png"
            className="imgperfil"
            alt="imgperfil_rapoporras"
          />
        </div>
        <Panel className="textoside">
          <h5>Ignacio Porras Ibáñez</h5>
          <h6>Desarrollador de Aplicaciones Multiplataforma</h6>
          <div style={{ marginTop: 15 }}>
            <a
              href="https://github.com/Rapoporras?tab=repositories"
              target="_blank"
              className="enlaces"
              style={{marginRight:10}}
            >
              <Icon icon="github-alt" size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ignacio-porras-iba%C3%B1ez/"
              target="_blank"
              className="enlaces"

            >
              <Icon icon="linkedin-square" size="2x" />
            </a>
            <a
              href="mailto:info@rapoporras.com"
              target="_blank"
              className="enlaces"
              style={{marginLeft:10}}
            >
              <Icon icon="envelope" size="2x" />
            </a>
          </div>

          <div className="cajasobre">
            <Divider>Sobre mí</Divider>
            <p>
              Soy un chico de 27 años, gran amante de los videojuegos y la
              programación. Nací en Antequera pero vivo en Marbella. Trabajo
              desde hace varios años pero siempre con ganas de aprender y
              emprender proyectos nuevos.
            </p>
          </div>

          <Habilidades></Habilidades>
        </Panel>
      </Panel>
    );
  }
}

export default Datos;
