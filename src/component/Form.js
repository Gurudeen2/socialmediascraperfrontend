import { Button, Col, Row, Form } from "react-bootstrap";

function HorizontalExample(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Row style={{ textAlign: "center" }}>
        {["radio"].map((type) => (
          <Col key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Facebook"
              name="group1"
              type={type}
              value="fb"
              id="fb"
            />
            <Form.Check
              inline
              label="LinkedIn"
              name="group1"
              type={type}
              id="ln"
            />
            <Form.Check
              inline
              label="Twitter"
              name="group1"
              type={type}
              id="tw"
            />
          </Col>
        ))}
      </Row>

      <Form.Group as={Row} className="mb-3 " controlId="search">
        <Form.Label className="text-center" column sm={2}>
          Search
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Search" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" style={{ textAlign: "right" }}>
        <Col sm={10}>
          <Button type="submit">Generate</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default HorizontalExample;
