import React from "react";
import {  Panel, Row, Grid, Col, Icon } from "rsuite";

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
        <Panel
          shaded
          bordered
          bodyFill
          onClick={() => this.open("md")}
        >
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={10} sm={10} md={10} style={{padding:0}}>
                <img
                  src={this.props.img}
                  className="imgempresa"
                  alt={this.props.altimg}
                />
              </Col>
              <Col xs={14} sm={14} md={14}>
                <h6>{this.props.name}</h6>
              </Col>
              <Col xs={24} sm={24} md={24} style={{color:"white",backgroundColor:"rgb(0, 105, 92)"}}>
                <p><Icon icon='calendar-o' style={{marginRight:15}}/>{this.props.date}</p>
              </Col>
            </Row>
          </Grid>
        </Panel>
      </div>
    );
  }
}

export default Empresa;
