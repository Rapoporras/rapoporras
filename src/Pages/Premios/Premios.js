import React from "react";
import { Content, Grid, Row, Col } from "rsuite";
import fire from "../../assets/fire";
import Premio from "../../Components/Premio/Premio";



function CargarPremio(props) {
  let PremiosList, array;

  array = Object.values(props.Premios);

  if (array.length !== 0) {
    PremiosList = array.map((premio) => {
      return (
        <Col xs={24} sm={24} md={24} key={premio.key}>
           <Premio
            name={premio.nombre} img={premio.imagen} reto={premio.reto}></Premio> 
       
        </Col>
      );
    });
  } else {
    PremiosList = <div></div>;
  }

  return PremiosList;
}

class Premios extends React.Component {
  constructor() {
    super();
    this.state = {
        Premios: [],
    };
  }

  componentDidMount() {
    this.database = fire.database().ref().child("Premios");
    this.database.on("value", (snap) => {
      this.setState({ Premios: snap.val() });
    });
  }
  render() {
    // const { active } = this.state;
    return (
      <Content
        style={{  textAlign: "center", padding: "15px" }}
      >
        <h3>Reconocimientos</h3>
        <div style={{ marginTop: "15px" }}>
          <Grid fluid>
            <Row className="show-grid">
              <CargarPremio Premios={this.state.Premios}></CargarPremio>
            </Row>
          </Grid>
        </div>
      </Content>
    );
  }
}

export default Premios;
