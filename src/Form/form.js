import React from 'react';
import './form.css';
import { Container, Row, Col } from 'react-bootstrap';

const Form = () => {
   
    return (
        <Container>
            <div className="bg-g">
            <Row>  
            <Col>Event Message  
              <div className="bg">
                <p>The error Message goes here</p>
              </div>
            </Col>
            <Col>
                <Row><Col>Error Count<div><input></input></div></Col></Row>
                <Row><Col>Last reported at<div><input></input></div></Col></Row>
            </Col>
            </Row>  
            </div>
        </Container>
    )
}
export default Form;