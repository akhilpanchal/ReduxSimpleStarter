import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';

export default class AddItem extends Component {

    state = {
        currItem: ''
    }

    changeItem = (event) => {
        this.setState({ currItem: event.target.value });
    };

    addItemToList = () => {
        if (this.state.currItem.length !== 0) {
            this.props.onAdd(this.state.currItem);
            this.clearInput();
        }
    };

    clearInput = () => {
        this.setState({ currItem: ''});
    }

    render() {
        return (
            <form>
                <FormGroup
                    controlId='formBasicText'>
                    <InputGroup>
                        <FormControl
                            type='text'
                            value={this.state.currItem}
                            placeholder='Enter Item'
                            onChange={this.changeItem} />
                        <InputGroup.Button>
                            <Button bsStyle='primary' onClick={this.addItemToList}> + </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}
