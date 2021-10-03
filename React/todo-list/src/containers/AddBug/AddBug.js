import React, { Component } from 'react';
import classes from './AddBug.module.css'
import Button from 'react-bootstrap/Button'
import axios from '../../axios-bugs'
import Spinner from '../../UI/Spinner/Spinner'
import MyAlert from '../../components/MyAlert/MyAlert'
import BugForm from '../../components/BugForm/BugForm';
import { connect } from 'react-redux'
import * as bugsActions from '../../store/actions/bugs'
import * as addBugsAction from '../../store/actions/addBug'
import { Redirect } from 'react-router-dom';

class AddBug extends Component {
    initialBugForm = {
        BugDescription: '',
        AppName: '',
        BugUrl: '',
        bugStatus:'pending',
        UrgentFlag: false
    }
    state = {
        sendingRequest: false,
        alert: {
            show: false,
            variant: '',
            message: ''
        },
    }

    componentDidMount = () => {
        this.props.onInitApps(this.props.token);
    }


    reportBug = (event) => {
       
        event.preventDefault();
        this.alertCloseHandler();
        this.setState({ sendingRequest: true });
        const formData = {};

        //get form data from state
        for (let bugForm in this.props.bugForm) {
            formData[bugForm] = this.props.bugForm[bugForm];
        }
        //add status,current date
        formData['date'] = new Date().toString();
        formData['user'] = this.props.userName;

        const bug = {
            bugData: formData
        }
        axios.post('https://bugreports-1a282.firebaseio.com/bugs.json?auth='+this.props.token, bug)
            .then(response => {
                this.setState({
                    sendingRequest: false,
                    alert: {
                        show: true,
                        variant: 'success',
                        message: 'Bug successfully added',
                    }
                });
                document.getElementById("myForm").reset();
                this.props.onBugFormChanged(this.initialBugForm);
                this.props.onInitBugs(this.props.token);

            })
            .catch(error => {
                this.setState({
                    sendingRequest: false,
                    alert: {
                        show: true,
                        variant: 'danger',
                        message: 'something went wrong ' + error,
                    }
                });

            });
    }
    alertCloseHandler = () => {
        if (this.state.alert.show === true) {
            this.setState(
                {
                    alert: {
                        show: false,
                    }
                }
            );
        }

    }

    inputChangeHandler = (event) => {

        const key = event.target.id;
        let value = event.target.value;
        const updatedForm = { ...this.props.bugForm };

        if(key==='UrgentFlag'){
            value=!updatedForm[key];
        }
        updatedForm[key] = value;
        this.props.onBugFormChanged(updatedForm);

    }


    render() {

        let reDirect = null;
        if(!this.props.isAuthenticated){
            reDirect = <Redirect to={this.props.authRedirectPath}/>
        }

        let options = (

            <option>
                fetching...
            </option>
        )
        if (!this.props.appsLoading) {

            options = (
                this.props.appsList.map(
                    (app) => {
                        return (<option key={app.id}>{app.name}</option>);
                    }
                )
            );
        }


        let btn = (
            <Button variant="primary" type="submit" block>
                ADD
            </Button>
        );
        if (this.state.sendingRequest) {
            btn = (
                <Button variant="primary" disabled block>
                    <Spinner count='4' />
                </Button>

            );
        }

        return (
            <div className={classes.main}>
                {reDirect}
                <BugForm
                    changed={this.inputChangeHandler}
                    submit={this.reportBug}
                    btn={btn}
                    options={options}
                />
                <MyAlert close={this.alertCloseHandler} show={this.state.alert.show} variant={this.state.alert.variant} message={this.state.alert.message} />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        appsLoading: state.apps.appsLoading,
        appsList: state.apps.appsList,
        bugForm: state.apps.bugForm,
        token: state.auth.token,
        isAuthenticated : state.auth.token!==null,
        authRedirectPath: state.auth.authRedirectPath,
        userName : state.auth.userName,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onInitBugs: (token) => dispatch(bugsActions.initBugs(token)),
        onInitApps: (token) => dispatch(addBugsAction.initApps(token)),
        onBugFormChanged: (bugForm) => dispatch(addBugsAction.setBugForm(bugForm))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddBug);