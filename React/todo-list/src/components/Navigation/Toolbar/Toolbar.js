import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import classes from './Toolbar.module.css'

const Toolbar = (props) => {
  let btn = (
    
      <Link className={classes.link} to="/signup"> SignIn</Link>
  
  )
  if (props.isAuthenticated ===true) {
    btn = (
      <Link className={classes.link} to={{
        pathname: "/logout",
        hash: '',
        search: '?quickSubmit=true'
      }}> LogOut  ({props.userName})</Link>
  )
  }
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/"><Navbar.Brand >Home</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        {btn}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Toolbar;