import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../rtk/slices/CardSlice";
import { addToWishing } from "../rtk/slices/WishingSlice";

const Cart = () => {
  const cardItems = useSelector((state) => state.card);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        {cardItems.map((product) => {
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
                  <Card.Text>{product.description}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    Remove
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToWishing(product))}
                  >
                    Add To Wishing
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

export default Cart;
