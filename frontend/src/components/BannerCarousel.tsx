import React from "react";
import { Col, Row, Carousel, Image } from "react-bootstrap";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import Rating from "./Rating";

export default function BannerCarousel() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [index, setIndex] = React.useState<number>(0);
  const interval: number = 8000;

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === products!.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [interval, products]);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row
      className="bg-secondary "
                  style={{
        height: "50vh",
        marginBottom: "1rem",
      }}
    >
      {products && (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {products.map((product) => (
            <Carousel.Item key={product.slug}>
              <Col md={6}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="d-block w-100 mt-5"
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                />
              </Col>
              <Col md={6} className="bg-secondary">
                <Carousel.Caption>
                  <h3 className="text-info">{product.name}</h3>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />

                  <p className="text-muted">{product.description}</p>
                </Carousel.Caption>
              </Col>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Row>
  );
}
