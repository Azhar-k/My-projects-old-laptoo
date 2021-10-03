import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Alert from 'react-bootstrap/Alert'

class MyAlert extends Component {

    render() {
        return (
            <Aux>
                <Alert show={this.props.show} variant={this.props.variant} onClose={this.props.close} dismissible>
                    {this.props.message}
                </Alert>
            </Aux>
        );
    }
}

export default MyAlert;