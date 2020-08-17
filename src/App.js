import React from 'react';
import './App.css';
import Form from './Form/form';
import Selectdropdown from './Selectdropdown';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <div><Selectdropdown /></div>
            <Form />
            <Form />
            <Form />
            <Form />
          </div>
          <Container>
          <Row>
            <Col sm= {5}>1 2 3 4 5</Col>
            <Col sm= {4}><div className="bottom">
                Results per page</div></Col>
            <Col sm= {3}><div className="box">
                1</div></Col>
          </Row>

        </Container>
        </Container>
        
      </div>

    )

  }
}
export default App;
 /*<Container>
          <Row>
            <Col></Col>
            <Col>
              
            </Col>
          </Row>

        </Container>*/