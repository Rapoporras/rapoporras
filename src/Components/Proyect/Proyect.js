import React from "react";
import { Button, Panel, Icon, Modal } from "rsuite";
import "../Proyect/Proyect.css";

function Tech(props) {
  console.log(props.tech);
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
      show: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  open(size) {
    this.setState({
      size,
      show: true,
    });
  }

  render() {
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
          onClick={() => this.open("md")}
        >
          <img src={this.props.img} className="imagenproyecto" alt={this.props.altimg} />
          <Tech tech={this.props.tech}></Tech>
          <h6 style={{ margin: 5 }}>{this.props.name}</h6>
        </Panel>

        <Modal
         
          show={this.state.show}
          onHide={this.close}
        >
          <Modal.Header>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.img} className="imagenproyecto" alt={this.props.altimg}></img>

            <h6 style={{marginTop:15}}> {this.props.descripcion}</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} appearance="primary">
              Ok
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Proyect;
