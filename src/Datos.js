import React from "react";
import { ButtonToolbar, Button, Drawer, Panel, FlexboxGrid, Divider, Icon } from "rsuite";
import PlaceholderParagraph from "rsuite/lib/Placeholder/PlaceholderParagraph";
import './Datos.css'

class Datos extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <Panel shaded bodyFill className="sidebar">
                <div style={{
                    position: "relative",
                    float: "left",
                    display: "block"
                }}>
                    <img src="https://rapoporras.com/assets/img/gamer.jpg" className="imgportada" />
                    <img src="https://rapoporras.com/assets/img/perfil.png" className="imgperfil" />
                </div>
                <Panel className="textoside">
                    <h4>Ignacio Porras Ibáñez</h4>
                    <h5>Desarrollador de Aplicaciones Multiplataforma</h5>

                    <div className="cajasobre">
                        <Divider>Sobre mí</Divider>
                        <p>Soy un chico de 26 años, gran amante de los videojuegos y la programación. Nací en Antequera pero vivo en Marbella desde que empece mis estudios. Trabajo desde hace dos años pero siempre con ganas de aprender y emprender proyectos nuevos.</p>
                    </div>

                    <div>  <Icon icon='github-alt' size="3x" />   <Icon icon='linkedin-square' size="3x" />   <Icon icon='envelope' size="3x" /> </div>
                </Panel>

            </Panel>




        );
    }

}

export default Datos;