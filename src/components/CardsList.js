import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

function CardsList({ itemData }) {
  return (
    <Row className="g-4">
    <Zoom >
        {itemData.length >= 1 ? (
          itemData.map((item) => {
            return (
              <Col sm="12" className="mb-3" key={item.id}>
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#f8f8f8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <div className="item-title"> {item.title}</div>
                        <div className="item-price">{item.price}</div>
                      </div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.des}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لايوجد بيانات</h3>
        )}
    </Zoom>
      </Row>
  );
}

export default CardsList;
