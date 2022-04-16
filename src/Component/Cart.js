import React , { useState, useEffect }  from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export default function Cart() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Cart Items ${count}`;
      });
  return (
    <>
      <Container className="text-center">
          <h1 className="p-5">Cart{count}</h1>
        <Row >
          <Col>
          <center>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/abstract-background-wallpaper-picture-id952039286?b=1&k=20&m=952039286&s=170667a&w=0&h=LmOcMt7FHxFUAr2bOSfTUPV9sQhME6ABtAYLM0cMkR4="
              />
              <Card.Body>
                <Card.Title>Blue</Card.Title>
              
                <Button variant="primary" onClick={() => setCount(count + 1)}>Add To Cart</Button>
              </Card.Body>
            </Card>
            </center>
          </Col>
          <Col>
          <center>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/fairy-winter-landscape-picture-id1299765486?b=1&k=20&m=1299765486&s=170667a&w=0&h=Uyvpy3znLAdjUaELLP1cBspFnjH60KsPnYAdOR5Croo="
              />
              <Card.Body>
                <Card.Title>Black</Card.Title>
                
                <Button variant="primary" onClick={() => setCount(count + 1)}>Add To Cart</Button>
              </Card.Body>
            </Card>
            </center>
          </Col>
          <Col>
          <center>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses="
              />
              <Card.Body>
                <Card.Title>Light</Card.Title>
                <Button variant="primary" onClick={() => setCount(count + 1)}>Add To Cart</Button>
              </Card.Body>
            </Card>

            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
}
