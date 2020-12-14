import React from "react";
import { Panel, Row, Grid, Col, Icon } from "rsuite";

import "../Premio/Premio.css";

class Premio extends React.Component {
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
            <Row className="show-grid ">
              <Col xs={8} sm={12} md={10} lg={12}style={{ padding: 0 }}>
                <img
                  src={this.props.img}
                  className="imgPremio"
                  alt={this.props.altimg}
                />
              </Col>
              <Col xs={16} sm={12} md={14} lg={12}>
                <Row className="show-grid fondopremio">
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    className="nombrePremio"
                  
                  >
                    <h6 style={{ fontSize: 20 }}>
                      {this.props.name}
                    </h6>
                  </Col>
                  <Col xs={24} sm={24} md={24} className="textdescripcion">
                    <p >{this.props.name}</p>
                  </Col>
                  {/* <Col xs={24} sm={24} md={24} className="nombrePremio">
                    <p style={{ margin: 5, fontSize: 14 }}>{this.props.name}</p>
                  </Col> */}
                </Row>
              </Col>
            </Row>
          </Grid>
        </Panel>
      </div>
    );
  }
}

export default Premio;
