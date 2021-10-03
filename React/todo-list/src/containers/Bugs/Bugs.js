import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import classes from './Bugs.module.css'
import Spinner from '../../UI/Spinner/Spinner'
import { connect } from 'react-redux';
import * as bugsActions from '../../store/actions/bugs'
import { Redirect } from 'react-router-dom';


class Bugs extends Component {

    componentDidMount = () => {
        this.props.onInitBugs(this.props.token);
    }

    render() {
        let reDirect = null;
        if(!this.props.isAuthenticated){
            reDirect = <Redirect to={this.props.authRedirectPath}/>
        }
        let bugsLi = (
            <Spinner count='6' />
        );


        if (this.props.bugsLoading === false) {
            bugsLi = (
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr >
                                <th>#</th>
                                <th>App Name</th>
                                <th>Bug Description</th>
                                <th>URL</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>User</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.bugsList.map((bug, index) => {

                                    let rowBgColor=''
                                    if(bug.UrgentFlag===true){
                                        rowBgColor = '#FFDAB9'
                                    }
                                    return (
                                        <tr key={index} style={{'backgroundColor':rowBgColor}}>
                                            <td>{index + 1}</td>
                                            <td>{bug.AppName}</td>
                                            <td>{bug.BugDescription}</td>
                                            <td><a href={bug.BugUrl}>{bug.BugUrl}</a></td>
                                            <td>{bug.date.slice(0,21)}</td>
                                            <td>
                                                {bug.bugStatus}
                                            </td>
                                            <td>
                                                {bug.user}
                                            </td>
                                        </tr>
                                    );
                                })
                            }


                        </tbody>
                    </Table>
                </div>
            );
        }

        return (
            
            <div className={classes.table}>
                {reDirect}
                {bugsLi}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bugsLoading: state.bugs.bugsLoading,
        bugsList: state.bugs.bugsList,
        token: state.auth.token,
        isAuthenticated :  state.auth.token !==null,
        authRedirectPath: state.auth.authRedirectPath,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitBugs: (token) => dispatch(bugsActions.initBugs(token))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bugs);