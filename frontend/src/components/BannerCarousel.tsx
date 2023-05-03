import React from "react";
import {
  Col,
  Row,
  Carousel,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import Rating from "./Rating";

export default function BannerCarousel() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [index, setIndex] = React.useState<number>(0);
  const interval: number = 5000;

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
    <>
      {products && (
        <Row
          style={{
            width: "99.2vw",
            background: "#232f3f",
            height: "80vh",
            marginBottom: "1rem",
            marginTop: "-3rem",
            marginLeft: "-10rem",
          }}
        >
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={interval}
            fade
          >
            {products.map((product) => (
              <Carousel.Item key={product.slug}>
                <Col md={5}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="d-block w-100 mt-5"
                    style={{
                      height: "70vh",
                      objectFit: "contain",
                    }}
                  />
                </Col>
                <Col
                  md={5}
                  className="d-flex align-items-start justify-content-start me-auto"
                >
                  <Carousel.Caption>
                    <h1 className="text-info"> BIG SALE</h1>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    />

                    <h3 className="text-muted">
                      GET 50% OFF WHEN YOU ORDER THIS CLASSIFIED ITEMS
                    </h3>
                    <div className="gap-5 ">
                      <Button className="btn-main mx-5">view</Button>
                      <Button className="btn-main mx-5">shop</Button>
                    </div>
                  </Carousel.Caption>
                </Col>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      )}
    </>
  );
}
