import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import {
  BannerCarousel,
  LoadingBox,
  MessageBox,
  ProductItem,
  ProductListing,
  TrendingItems,
} from "../components";

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
      <ProductListing />
    </Container>
  );
}
