import React from "react";
import { Header, Icon, Nav } from "rsuite";

const styles = {
    marginBottom: 50
};

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav appearance="tabs" justified {...props} activeKey={active} onSelect={onSelect} style={styles}>
            <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
                Home
        </Nav.Item>
            <Nav.Item eventKey="news">News</Nav.Item>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>
        </Nav>
    );
};

class HeaderRapo extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'home'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(activeKey) {
        this.setState({ active: activeKey });
    }
    render() {
        const { active } = this.state;
        return (
            <Header>
                <div>

                    <CustomNav appearance="tabs" justified active={active} onSelect={this.handleSelect} />


                </div>
            </Header>
        );
    }
}

export default HeaderRapo;