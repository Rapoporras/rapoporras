import React from "react";
import { Button, Panel, Icon, Drawer } from "rsuite";
import "../Proyect/Proyect.css";

function Tech(props) {
  switch (props.tech) {
    case "WEB":
      return (
        <div className="cajatec backweb">
          <Icon icon="server" /> Web Apps
        </div>
      );
    case "APP":
      return (
        <div className="cajatec backapp">
          <Icon icon="mobile" /> App Movil
        </div>
      );
    case "DESKTOP":
      return (
        <div className="cajatec backdesk">
          <Icon icon="desktop" /> Escritorio
        </div>
      );

    default:
      return (
        <div className="cajatec backoth">
          <Icon icon="microchip" /> Otros Proyectos
        </div>
      );
  }
}
class Proyect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: true,
      show: false,
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.abrirenlace = this.abrirenlace.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  toggleDrawer() {
    this.setState({ show: true });
  }

  abrirenlace(url) {
    window.open(
      url,
      "_blank" // <- This is what makes it open in a new window.
    );
  }

  render() {
    const { backdrop, show } = this.state;
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <Panel
          shaded
          bordered
          bodyFill
          className="cajaproyecto"
          onClick={this.toggleDrawer}
        >
          <img
            src={this.props.img}
            className="imagenproyecto"
            alt={this.props.altimg}
          />
          <Tech tech={this.props.tech}></Tech>
          <h6 style={{ margin: 5,fontSize:15 }}>{this.props.name}</h6>
        </Panel>

        <Drawer
          backdrop={backdrop}
          show={show}
          onHide={this.close}
          size="xs"
          className="ventanaModal"
        >
          <Drawer.Header>
            <Drawer.Title>{this.props.name}</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <img
              src={this.props.img}
              className="imagenproyectodraw"
              alt={this.props.altimg}
            />
            {this.props.descripcion}
          </Drawer.Body>
          <Drawer.Footer>
            <Button
              onClick={() => this.abrirenlace(this.props.url)}
              appearance="primary"
              size='lg'
            >
              Visitar proyecto
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cerrar
            </Button>
          </Drawer.Footer>
        </Drawer>
      </div>
    );
  }
}

export default Proyect;
