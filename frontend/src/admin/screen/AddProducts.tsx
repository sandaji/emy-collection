import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Product {
  name: string;
  slug: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>({
    name: "",
    slug: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  });

  const {
    name,
    slug,
    image,
    brand,
    category,
    description,
    price,
    countInStock,
  } = product;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("/api/products", product);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group  controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>{" "}
        <Col>
          <Form.Group controlId="slug">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              type="text"
              name="slug"
              value={slug}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="brand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type="text"
          name="brand"
          value={brand}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={category}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="countInStock">
        <Form.Label>Count in Stock</Form.Label>
        <Form.Control
          type="number"
          name="countInStock"
          value={countInStock}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default AddProduct;
