import React from "react";
import { Grid, Row, Col, Footer, Panel } from "rsuite";
import HeaderRapo from "./HeaderRapo";
import Main from "./Main";
import Datos from "./Datos";

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
          <Col xs={24} sm={24} md={18} style={{ padding: "0px" }}>
            {/* <HeaderRapo></HeaderRapo>  */}
            <Main></Main>
            <Footer></Footer>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
