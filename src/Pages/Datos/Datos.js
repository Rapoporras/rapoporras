import React from "react";
import {  Panel, Divider, Icon } from "rsuite";
import './Datos.css'

class Datos extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (

            <Panel shaded bodyFill className="sidebar">
                <div style={{
                    position: "relative",
                    float: "left",
                    display: "block"
                }}>
                    <img src="https://rapoporras.com/assets/img/gamer.jpg" className="imgportada"  alt="imgportada_rapoporras"/>
                    <img src="https://rapoporras.com/assets/img/perfil.png" className="imgperfil" alt="imgperfil_rapoporras"/>
                </div>
                <Panel className="textoside">
                    <h4>Ignacio Porras Ibáñez</h4>
                    <h5>Desarrollador de Aplicaciones Multiplataforma</h5>

                    <div className="cajasobre">
                        <Divider>Sobre mí</Divider>
                        <p>Soy un chico de 27 años, gran amante de los videojuegos y la programación. Nací en Antequera pero vivo en Marbella. Trabajo desde hace varios años pero siempre con ganas de aprender y emprender proyectos nuevos.</p>
                    </div>

                    <div>  <a href="https://github.com/Rapoporras?tab=repositories" target="_blank" className="enlaces" ><Icon icon='github-alt'  size="3x" /></a>   <Icon icon='linkedin-square' size="3x" />   <Icon icon='envelope' size="3x" /> </div>
                </Panel>

            </Panel>




        );
    }

}

export default Datos;