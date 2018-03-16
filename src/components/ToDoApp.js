import React, { Component } from 'react';
import ToDoList from './ToDoList.js';
import AddItem from './AddItem.js';
import { Grid, Row, Col } from 'react-bootstrap';

export default class ToDoApp extends Component {

    state = {
        items: []
    }

    addItemToList = (item) => {
        this.setState({
            ...this.state,
            items: this.state.items.concat(item)
        });
    };

    render() {
        return (
            <Grid className='grid'>
                <Row className='appTitle'>
                    List It Up!
                </Row>
                <Row>
                    <AddItem onAdd={this.addItemToList} />
                </Row>
                <Row>
                    <ToDoList items={this.state.items} />
                </Row>
            </Grid>
        );
    }
}
