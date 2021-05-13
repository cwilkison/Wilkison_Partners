import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

import Content from "./Content";
import ContactInfo from "./contactInfo";
import Location from "./location";
import Hero from "./Hero";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function Contact(props) {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = form;
    const template = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_c38yadb",
        "template_0s94nmj",
        template,
        "user_l4taf2huxQeeD2nhAS7Ub"
      )
      .then(
        function (response) {
          alert("Message Successfully Sent!");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          alert("Message Not Sent, Check Information");
          console.log("FAILED...", error);
        }
      );
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={form.name || ""}
              onChange={onChange}
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={form.email || ""}
              onChange={onChange}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={form.message || ""}
              onChange={onChange}
              rows="5"
            />
          </Form.Group>
          <Button className="d-inline-block" variant="primary" type="submit">
            Send
          </Button>

          {form.emailSent === true && (
            <p className="d-inline success-msg">Email Sent</p>
          )}
          {form.emailSent === false && (
            <p className="d-inline error-msg">Email Not Sent</p>
          )}
        </Form>
        <ContactInfo />
      </Content>
      <div class="spacer"></div>
      <Location />
    </div>
  );
}

export default Contact;
