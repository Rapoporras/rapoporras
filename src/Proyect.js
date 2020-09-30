import React from "react";
import {  Button, Drawer, Panel, Carousel, Icon } from "rsuite";

class Proyect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    close() {
        this.setState({
            show: false
        });
    }
    toggleDrawer() {
        this.setState({ show: true });
    }

  

    render() {
        return (
            <div>
                <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, cursor: "pointer" }} onClick={this.toggleDrawer} >
                    <img src="https://rapoporras.com/assets/img/Proyectos/drawrrss.png" height="150" />
                    <Icon icon='desktop' /> Escritorio
                    <h5>{this.props.name}</h5>
                   
                </Panel>

                <Drawer
                    size="md"
                    show={this.state.show}
                    onHide={this.close}
                >
                    <Drawer.Header>
                        <Drawer.Title>{this.props.name}</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <div>
                        <div>
                            Información:
                            
                        </div>
                            <div>
                                Capturas de Pantalla
                            <Carousel autoplay shape="bar">
                                    <img
                                        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
                                        height="250"
                                    />
                                    <img
                                        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
                                        height="250"
                                    />
                                    <img
                                        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
                                        height="250"
                                    />
                                    <img
                                        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
                                        height="250"
                                    />
                                    <img
                                        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
                                        height="250"
                                    />
                                </Carousel>
                            </div>
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button onClick={this.close} appearance="subtle">Más Información</Button>
                    </Drawer.Footer>
                </Drawer>
            </div>
        );
    }

}

export default Proyect;