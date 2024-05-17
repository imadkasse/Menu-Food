import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Roll from "react-reveal/Zoom";

function Category({ filterData, allCategory }) {
  const onFilter = (category) => {
    filterData(category);
  };
  return (
    <Row className="my-2 mb-5 mt-4">
      <Col sm="12" className="d-flex justify-content-center ">
        <Roll>
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => {
              return (
                <Button
                  variant="outline"
                  className="btn mx-1 "
                  style={{ border: "2px solid #B45B35" }}
                  onClick={() => {
                    onFilter(cat);
                  }}
                >
                  {cat}
                </Button>
              );
            })
          ) : (
            <h3>لايوجد أصناف</h3>
          )}
        </Roll>
      </Col>
    </Row>
  );
}

export default Category;
