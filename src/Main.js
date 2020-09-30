import React from "react";
import { Content, Grid, Row, Col, Badge, Button, Icon } from "rsuite";
import Proyect from "./Proyect";
import fire from '../src/assets/fire';


// function Imgcarrousel(props) {
//     let imglist, array;
//     if (props.imagenes !== null) {



//         array = Object.values(props.imagenes);
//         if (array.length !== 0) {
//             imglist = array.map(imagen => {
//                 return <img key={imagen.alt} src={imagen.url} alt={imagen.alt} />
//             });
//         }
//     } else {
//         return <img src="" alt="" />
//     }
//     return (<Carousel>
//         {imglist}
//     </Carousel>);

// }


// function CargarProyecto(props) {
//     if (props.cargando !== "cargando") {
//         return <div style={{ marginBottom: 150 }}>
//             <div style={{ width: "100%" }}>
//                 <Imgcarrousel imagenes={props.imagenes}></Imgcarrousel>
//             </div>
//             <div>
//                 <Card style={{ marginTop: 15, width: "95%", marginLeft: "2.5%", borderRadius: "1em" }}>
//                     <CardContent>

//                         <Typography variant="h5" component="h2" style={{ textAlign: "center" }}>
//                             {props.name}
//                         </Typography>
//                         <div dangerouslySetInnerHTML={{ __html: props.desc }} >
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>;
//     } else {
//         return <div>
//             <CircularIndeterminate></CircularIndeterminate>
//         </div>;
//     }
// }

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            axis: 'x',
            name: "nombre producto",
            desc: "descripcion",
            imagenes: [],
            tipo: "",
            cargando: "cargando"
        }

    }

    // componentDidMount() {

    //     this.database = fire.database().ref().child("productos").child(this.props.match.params.product);
    //     this.database.on('value', snap => {
    //         this.setState({ name: snap.child("nombre").val() })
    //         this.setState({ desc: snap.child("descripcion").val() })
    //         this.setState({ imagenes: snap.child("imagenes").val() })
    //         this.setState({ cargando: "cargado" })
    //     })


    // }
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
