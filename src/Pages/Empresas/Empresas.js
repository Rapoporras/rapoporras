import React from "react";
import { Content, Grid, Row, Col } from "rsuite";
import fire from "../../assets/fire";
import Empresa from "../../Components/Empresa/Empresa";



function CargarEmpresa(props) {
  let empresasList, array;

  array = Object.values(props.empresas);

  if (array.length !== 0) {
    empresasList = array.map((empresa) => {
      return (
        <Col xs={24} sm={24} md={8} key={empresa.key} >
          <Empresa
            name={empresa.nombre} img={empresa.imagen}   date={empresa.tiempo}       ></Empresa>
        </Col>
      );
    });
  } else {
    empresasList = <div></div>;
  }

  return empresasList;
}

class Empresas extends React.Component {
  constructor() {
    super();
    this.state = {
        empresas: [],
    };
  }

  componentDidMount() {
    this.database = fire.database().ref().child("Experiencia");
    this.database.on("value", (snap) => {
      this.setState({ empresas: snap.val() });
    });
  }
  render() {
    // const { active } = this.state;
    return (
      <Content
        style={{  textAlign: "center", padding: "15px" }}
      >
        <h3>Experiencia</h3>
        <div style={{ marginTop: "15px" }}>
          <Grid fluid>
            <Row className="show-grid">
              <CargarEmpresa empresas={this.state.empresas}></CargarEmpresa>
            </Row>
          </Grid>
        </div>
      </Content>
    );
  }
}

export default Empresas;
