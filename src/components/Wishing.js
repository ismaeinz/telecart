import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishing } from "../rtk/slices/WishingSlice";
import { addToCart } from "../rtk/slices/CardSlice";

const Wishing = () => {
  const wishingItems = useSelector((state) => state.wishing);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        {wishingItems.map((product) => {
          return (
            <Col key={product.id}>
              <Card style={{ width: "15rem", fontSize: "10px" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "5rem", height: "5rem" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Title>{product.price}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromWishing(product))}
                  >
                    remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Wishing;
