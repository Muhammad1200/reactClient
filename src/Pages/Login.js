import React, { useState, useEffect }from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Login() {
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")    
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const history = useHistory();
    
    useEffect(() => {
        if (token !== null) {
          history.push("/");
        }
      }, [token, history]);
    
    function submitForm(event) {
        event.preventDefault();
    
        dispatch(login(email, password));
    
        set_email("");
        set_password("");
      }
    
      return (
        <Container>
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <h1 className="mt-5 mb-5">Login</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={event => set_email(event.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={event => set_password(event.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="primary" type="submit" onClick={submitForm}>
                Log in
              </Button>
            </Form.Group>
            <Link to="/signup" style={{ textAlign: "center" }}>
              Click here to sign up
            </Link>
          </Form>
        </Container>
        )
}