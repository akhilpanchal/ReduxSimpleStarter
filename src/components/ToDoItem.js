import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

export default class ToDoItem extends Component {

    state= {
        isDone: false
    };

    updateStatus = (event) => {
        this.setState({ isDone: event.target.checked})
    };

    renderItem = () => {
        const itemName = this.props.name;
        if(this.state.isDone) {
            return (<strike>{ itemName }</strike>);
        }
        return itemName;
    };

    render() {
        return (
            <div>
                <Checkbox inline checked={this.state.isDone} onChange={this.updateStatus}>
                    { this.renderItem() }
                </Checkbox>
            </div>
        );
    }
}
