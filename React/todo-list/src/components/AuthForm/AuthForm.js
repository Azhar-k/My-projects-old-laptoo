import React from 'react'
import Form from 'react-bootstrap/Form'


const AuthForm = (props) => {
    return (
        <div>
            <Form className="p-3" onSubmit={props.submit} >
                <Form.Group controlId="email" onChange={props.changed}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="password" onChange={props.changed}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                {props.btn}

            </Form>
        </div>
    );
}

export default AuthForm;