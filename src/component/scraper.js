import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalExample from "./Form";
import ScraperTable from "./Table";

const Scraper = () => {
  const [social, setSocial] = useState();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit", e.target.search.value);
    console.log("fb", social);
  };
  const getSocialHandler = (e) => {
    setSocial(e.target.value);
    console.log("social it", e.target.value);
  };
  return (
    <Container>
      <div className="py-5 text-center">
        <h2>Social Media Scraper</h2>
      </div>
      <div>
        <HorizontalExample
          onSubmit={onSubmitHandler}
          getSocial={getSocialHandler}
        />
      </div>
      <Row className="mt-5">
        <Col md="12" lg="12" sm="12" className="mb-4">
          <ScraperTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Scraper;
