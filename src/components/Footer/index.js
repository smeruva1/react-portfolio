import React from "react";
import { Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <footer className="foot" Style={{ marginTop: "auto" }}>
      <div className="footer_teal">
        <br />
      </div>
      <div className="footer_grey">
        {/* <br /> */}
        <Row>
          <Col>
            <h5> Copyright&copy;</h5>
          </Col>
          <Col>
            <h5>Portfolio developed by Sudar Meruva</h5>
          </Col>
          <Col>
            <h5>Technologies: React Components, Props, React Router, React Bootstrap, Vercel </h5>
          </Col>

        </Row>
      </div>
    </footer>
  );
}

export default Footer;
