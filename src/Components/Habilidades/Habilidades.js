import React from "react";
import { Grid, Row, Col, Content, Divider } from "rsuite";
import "./Habilidades.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAndroid,
  faAws,
  faAngular,
  faBootstrap,
  faGithub,
  faHtml5,
  faJava,
  faJsSquare,
  faMailchimp,
  faMdb,
  faNode,
  faNpm,
  faPaypal,
  faPhp,
  faRaspberryPi,
  faSpotify,
  faUnity,
  faPython,
  faCss3Alt,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

class Habilidades extends React.Component {
  render() {
    return (
      <Content style={{ textAlign: "center", padding: "15px" }}>
        <h5>Lenguajes - Herramientas - Frameworks</h5>
        <div style={{ backgroundColor: "white", borderRadius: 15 , marginTop: "15px" }}>
          <FontAwesomeIcon
            icon={faHtml5}
            size="3x"
            color="#c74f34"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            size="3x"
            color="#264ee3"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faJsSquare}
            size="3x"
            color="#f7de1f"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faPhp}
            size="3x"
            color="#617cbf"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faJava}
            size="3x"
            color="#0c74b2"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faPython}
            size="3x"
            color="#3870a0"
            style={{ margin: 10 }}
          />

          <FontAwesomeIcon
            icon={faAndroid}
            size="3x"
            color="#78C257"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faGoogle}
            size="3x"
            color=" rgba(66, 133, 244, 1)"
            style={{ margin: 10 }}
          />

          <FontAwesomeIcon
            icon={faReact}
            size="3x"
            color="#0ad2f7"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faAngular}
            size="3x"
            color="#b62f33"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faBootstrap}
            size="3x"
            color="#5d3f89"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faGithub}
            size="3x"
            color="#24272e"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faAws}
            size="3x"
            color="#FF9900"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faMailchimp}
            size="3x"
            color="#f7d919"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faMdb}
            size="3x"
            color="#3685d7"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faNode}
            size="3x"
            color="#79b463"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faNpm}
            size="3x"
            color="#c63636"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faPaypal}
            size="3x"
            color="#00457C"
            style={{ margin: 10 }}
          />

          <FontAwesomeIcon
            icon={faRaspberryPi}
            size="3x"
            color="#b41140"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faSpotify}
            size="3x"
            color="#1DB954"
            style={{ margin: 10 }}
          />
          <FontAwesomeIcon
            icon={faUnity}
            size="3x"
            color="#222c36"
            style={{ margin: 10 }}
          />
        </div>
      </Content>
    );
  }
}

export default Habilidades;
