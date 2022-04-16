import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";

export default function Hooks() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  return (
      
    <>
      <Container className="p-5">
        <Form  action="">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRollNo">
            <Form.Label>RollNo</Form.Label>
            <Form.Control type="rollno" placeholder="RollNo" onChange={(e) => setRoll(e.target.value)} />
          </Form.Group>

          <h1 className="text-center">{name}</h1>
          <h1 className="text-center">{roll}</h1>
        </Form>
      </Container>
    </>
  );
}
