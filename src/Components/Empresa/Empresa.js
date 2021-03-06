import React from "react";
import { Panel, Row, Grid, Col, Icon } from "rsuite";

import "../Empresa/Empresa.css";

class Empresa extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <Panel shaded bordered bodyFill onClick={() => this.open("md")}>
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={24} sm={24} md={24} style={{ padding: 0 }} className="fondo">
                <img
                  src={this.props.img}
                  className="imgempresa"
                  alt={this.props.altimg}
                />
              </Col>
              <Col xs={24} sm={24} md={24} className="nombreEmpresa" style={{height: 40,backgroundColor: "white"}}>
                <h6 style={{fontSize: 14}}>{this.props.name}</h6>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                style={{ color: "white", backgroundColor: "rgb(0, 105, 92)" }}
              >
              
                  <Icon icon="calendar-o" style={{ marginRight: 15 }} />
                  {this.props.date}
               
              </Col>
            </Row>
          </Grid>
        </Panel>
      </div>
    );
  }
}

export default Empresa;
