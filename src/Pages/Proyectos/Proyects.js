import React from "react";
import { Content, Grid, Row, Col } from "rsuite";
import Proyect from "../../Components/Proyect/Proyect";
import fire from "../../assets/fire";



function CargarProyecto(props) {
  let proyectsList, array;

  array = Object.values(props.proyects);

  if (array.length !== 0) {
    proyectsList = array.map((proyect) => {
      return (
        <Col xs={24} sm={8} md={8} key={proyect.key}>
          <Proyect
            name={proyect.nombre}
            img={proyect.imagen}
            tech={proyect.tecnologias}
            url={proyect.url}
            descripcion={proyect.descripcion}
          ></Proyect>
        </Col>
      );
    });
  } else {
    proyectsList = <div></div>;
  }

  return proyectsList;
}

class Proyects extends React.Component {
  constructor() {
    super();
    this.state = {
      proyects: [],
    };
  }

  componentDidMount() {
    this.database = fire.database().ref().child("Proyectos").orderByValue();
    this.database.on("value", (snap) => {
      this.setState({ proyects: snap.val() });
    });
  }
  render() {
    // const { active } = this.state;
    return (
      <Content
        style={{ textAlign: "center", padding: "15px" }}
      >
        <h3>Proyectos</h3>
        {/* <div style={{ marginTop: "15px" }}>
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={24} sm={24} md={6}>
                <Badge content={5} className="cajabadge">
                  <Button className="backweb">
                    <Icon icon="server" size="lg" /> Web Apps
                  </Button>
                </Badge>
              </Col>
              <Col xs={24} sm={24} md={6}>
                <Badge content={2} className="cajabadge">
                  <Button>
                    <Icon icon="mobile" size="lg" /> App Movil
                  </Button>
                </Badge>
              </Col>
              <Col xs={24} sm={24} md={6}>
                <Badge content={1} className="cajabadge">
                  <Button>
                    <Icon icon="desktop" size="lg" /> Escritorio
                  </Button>
                </Badge>
              </Col>
              <Col xs={24} sm={24} md={6}>
                <Badge content={5} className="cajabadge">
                  <Button>
                    <Icon icon="microchip" size="lg" /> Otros Proyectos
                  </Button>
                </Badge>
              </Col>
            </Row>
          </Grid>
        </div> */}
        <div style={{ marginTop: "15px" }}>
          <Grid fluid>
            <Row className="show-grid">
              <CargarProyecto proyects={this.state.proyects}></CargarProyecto>
            </Row>
          </Grid>
        </div>
      </Content>
    );
  }
}

export default Proyects;
