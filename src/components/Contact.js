import React from "react";
import Form from "react-bootstrap/Form";

import Content from "./Content";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }
  render() {
    return (
      <div>
        <Content>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Messsage</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
