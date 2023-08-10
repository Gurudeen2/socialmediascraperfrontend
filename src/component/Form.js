import { Button, Col, Row, Form } from "react-bootstrap";

function HorizontalExample(props) {
 
  return (
    <Form onSubmit={props.onSubmit}>
      <Row style={{ textAlign: "center" }}>
        <Col key={`inline-radio`} className="mb-3" onChange={props.getSocial}>
          <Form.Check
            inline
            label="Facebook"
            name="group1"
            type="radio"
            value="fb"
            id="fb"
          />
          <Form.Check
            inline
            label="LinkedIn"
            name="group1"
            value="ln"
            type="radio"
            id="ln"
          />
          <Form.Check
            inline
            label="Twitter"
            name="group1"
            type="radio"
            id="tw"
            value="tw"
          />
        </Col>
      </Row>

      <Form.Group as={Row} className="mb-3 " controlId="search">
        <Form.Label className="text-center" column sm={2}>
          Search
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="text" placeholder="Search" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" style={{ textAlign: "center" }}>
        <Col sm={12}>
          <Button type="submit">Generate</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default HorizontalExample;
