import React, { Component } from 'react';
import Matrix from './Matrix'

export default class Cell extends Component {

    // we use the constructor to set the INITIAL STATE
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    changeColor = () => {
        const newColor = this.state.color = '#333'
        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color }} onClick={this.changeColor}>
            </div>
        )
    }


}

