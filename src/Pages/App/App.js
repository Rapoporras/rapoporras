import React from "react";
import { Grid, Row, Col, Footer } from "rsuite";
import Proyects from "../Proyectos/Proyects";
import Datos from "../Datos/Datos";
import Empresas from "../Empresas/Empresas";
import "./App.css"
import Habilidades from "../../Components/Habilidades/Habilidades";

function App() {
  return (
    <div id="main">
      {/* hola */}
      <Grid fluid>
        <Row className="show-grid">
          <Col
            xs={24}
            sm={24}
            md={6}
            style={{ padding: "0px", backgroundColor: "#00695c" }}
          >
            <Datos></Datos>
          </Col>
          <Col xs={24} sm={24} md={18} className="contenido">
            <Empresas></Empresas>
            <Habilidades></Habilidades>
            <Proyects></Proyects>
            <Footer></Footer>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
