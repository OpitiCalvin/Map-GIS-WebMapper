import React from 'react';
import MainNavBar from './MainNavBar';
import MainFooter from './MainFooter';
import LeafletWebMap from './LeafletWebMap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ToolsPane from './ToolsPane';


function HomePage(props) {



    return (
        <>
            <MainNavBar />
            <Container fluid>
                <Row style={{ height: "88vh", margin: "2px 0" }}>
                    <Col md={9}>
                        <LeafletWebMap />
                    </Col>
                    <Col md={3}>
                        <ToolsPane />
                    </Col>
                </Row>
            </Container>
            <MainFooter />
        </>
    )
}

export default HomePage;