import React from "react";
import { Col, Container, Row, } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import TrendingItems from "../components/Trending";
import BannerCarousel from "../components/BannerCarousel";

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery();


  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Container fluid>
      <Helmet>
        <title>Emy Collections</title>
      </Helmet>
     
        <BannerCarousel />
      
      <Row>
        <h3>Top Products</h3>
        {products!.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
      <Row>
        <h3>Trending Products</h3>
        {products!.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={2}>
            <TrendingItems product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
