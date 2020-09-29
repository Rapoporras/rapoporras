import React from "react";
import { Content, Grid, Row, Col, Badge, Button, Icon } from "rsuite";
import Proyect from "./Proyect";


class Main extends React.Component {

    constructor() {
        super();
    }
    render() {
        // const { active } = this.state;
        return (
            <Content style={{ height: "100vh", textAlign: "center", padding: "15px" }}>
                <h1>Proyectos</h1>
                <div style={{ marginTop: "15px" }}>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={24} sm={24} md={6}>
                                <Badge content={5}>
                                    <Button><Icon icon='server' size="lg" /> Web Apps</Button>
                                </Badge>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Badge content={2}>
                                    <Button><Icon icon='mobile' size="lg" /> App Movil</Button>
                                </Badge>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Badge content={1}>
                                    <Button><Icon icon='desktop' size="lg" /> Escritorio</Button>
                                </Badge>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Badge content={5}>
                                    <Button ><Icon icon='microchip' size="lg" /> Otros Proyectos</Button>
                                </Badge>
                            </Col>
                        </Row>
                    </Grid>

                </div>
                <div style={{ marginTop: "15px" }}>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>

                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                            <Col xs={24} sm={24} md={6}>
                                <Proyect name="hola"></Proyect>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Content>
        );
    }
}

export default Main;
