import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ToDoList extends Component {

    renderItems = () => {
        return this.props.items.map((item, key) => 
            <ListGroupItem key={key}>
                <ToDoItem name={item} />
            </ListGroupItem>
        );
    };

    render() {
        return (
            <div className='vOffset15'>
                <ListGroup>
                    { this.renderItems() }
                </ListGroup>
            </div>
        );
    }
}
