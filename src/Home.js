import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';

class Home extends Component {

    render() {
    return (
      <div className="App">
        <AppNavbar/>
        <Container fluid>
          <Row className="text-center">
          <Col>
            <Button color="primary" className="px-4" tag={Link} to="/reader">Read News</Button>
          </Col>
          <Col>
            <Button color="primary" className="px-4" tag={Link} to="/journalist">Upload News</Button>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;