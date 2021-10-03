import React from 'react'

import Form from 'react-bootstrap/Form'

import { connect } from 'react-redux'

const BugForm = (props) => {
    return (
        <div>
            <Form id='myForm' className="p-3" onSubmit={props.submit} >
                <Form.Group controlId="AppName" onChange={props.changed}>
                    <Form.Label>Choose Application</Form.Label>
                    <Form.Control as="select" custom>
                        {props.options}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="BugDescription" onChange={props.changed}>
                    <Form.Label>Bug Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter bug description" />
                </Form.Group>
                <Form.Group controlId="BugUrl" onChange={props.changed}>
                    <Form.Label>Bug URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter URL" />
                </Form.Group>
                <Form.Group controlId="bugStatus" onChange={props.changed}>
                    <Form.Label>Select Status</Form.Label>
                    <Form.Control as="select" custom>
                        <option value='pending'>Pending</option>
                        <option value='solved'>Solved</option>
                        <option value='failed'>Can not solve</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="UrgentFlag" onChange={props.changed}>
                    <Form.Check
                        value={true}
                        type="switch"
                        label="Urgent" />
                </Form.Group>
                {props.btn}

            </Form>
        </div>
    );
}
const mapStateToProps = state => {
    return {

        appsList: state.apps.appsList,
        bugForm: state.apps.bugForm,
        appsLoading: state.apps.appsLoading
    };
}
export default connect(mapStateToProps)(BugForm);