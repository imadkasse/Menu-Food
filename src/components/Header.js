import React from "react";
import { Col, Row } from "react-bootstrap";

function Header() {
  return (
    <Row className="">
      <Col sm="12" className="justify-content-center text-center">
        <div className="title ">قائمة الطعام</div>
        <div className="d-flex justify-content-center">
          <div className="underline"></div>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
