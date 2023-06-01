import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/GetProductsSlice";
import { addToWishing } from "../rtk/slices/WishingSlice";
import { addToCart } from "../rtk/slices/CardSlice";

const Products = () => {
  const products = useSelector((state) => state.products);
  const card = useSelector((state) => state.card);
  console.log(card);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Container>
      <Row>
        {products.map((product) => {
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
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </Button>
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

export default Products;
