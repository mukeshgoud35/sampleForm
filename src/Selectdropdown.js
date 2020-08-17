import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './Form/form.css';


const  Selectdropdown = () => {

    return (
        <div >
            <Container>
                <Row>
                    <Col sm ={8}><b>Structural Validation Report</b></Col>
                    <Col sm ={2}>Filters</Col>
                    <Col sm ={2}><DropdownButton
                        alignRight
                        title="Dropdown right "
                        id="dropdown-menu-align-right"
                    >
                        <Dropdown.Item eventKey="1">option1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">option2</Dropdown.Item>
                        <Dropdown.Item eventKey="3">option3</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Sub option1</Dropdown.Item>
                    </DropdownButton> 
                    <h9>Select an event</h9></Col>
                </Row>
            </Container>


        </div>

    )
}
export default Selectdropdown;

/*import React from 'react';
import Select from 'react-select';

const options = [
    {value: 'a', label:'a'},
    {value: 'b', label:'b'},
    {value: 'c', label:'c'}
];

class Filter extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({selectedOption});
        console.log(`Option Selected:`, selectedOption)
    };

    render(){
        const {selectedOption} = this.state;

        return(
            <div>
               <Select
               value= {selectedOption}
               onChange = {this.handleChange}
               options = {options}/>
            </div>
        );
    }
}
export default Filter;*/