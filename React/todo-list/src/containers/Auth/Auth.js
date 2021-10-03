import React, { Component } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import MyAlert from '../../components/MyAlert/MyAlert';
import classes from './Auth.module.css'
import Button from 'react-bootstrap/Button'
import Spinner from '../../UI/Spinner/Spinner'
import { connect } from 'react-redux'
import * as authAction from '../../store/actions/auth'
import { Redirect } from 'react-router-dom';

class Auth extends Component {


    state = {
        authForm: {
            email: '',
            password: '',
        },
        alert: {
            show: false,
            variant: '',
            message: ''
        },
        isSignup: false,
    }

    alertCloseHandler = () => {

    }

    inputChangeHandler = (event) => {
        const key = event.target.id;
        const value = event.target.value;

        const updatedForm = { ...this.state.authForm };

        updatedForm[key] = value;

        this.setState({
            authForm: updatedForm
        })

    }

    signUpHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.onAuth(this.state.authForm.email, this.state.authForm.password, this.state.isSignup);

    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }
    render() {
        let btn = (
            <Button variant="primary" type="submit" block>
                {this.state.isSignup ? 'SignUp' : 'SignIn'}
            </Button>
        );
        if (this.props.authenticating) {
            btn = (
                <Button variant="primary" disabled block>
                    <Spinner count='4' />
                </Button>
            );
        }

        let myAlert= null;
        if (this.props.error) {
            myAlert = <MyAlert
                close={this.alertCloseHandler}
                show={true} variant='danger'
                message={this.props.error.message}
            />
        }

        let reDirect = null;
        
        if(this.props.isAuthenticated===true){
            reDirect = (
                <Redirect to='/'/>
            )   
        }
        

        return (
            <div className={classes.main}>
                {reDirect}
                <AuthForm
                    changed={this.inputChangeHandler}
                    submit={this.signUpHandler}
                    btn={btn}
                />
                <Button
                    onClick={this.switchAuthModeHandler}
                    variant="danger">Switch {this.state.isSignup ? 'SignIn' : 'SignUp'}</Button>
                {myAlert}


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        error: state.auth.error,
        authenticating: state.auth.authenticating,
        authRedirectPath: state.auth.authRedirectPath,
        isAuthenticated : state.auth.token !==null,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(authAction.auth(email, password, isSignup))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);