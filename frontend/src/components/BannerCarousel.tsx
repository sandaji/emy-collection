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
        <Carousel>
          {" "}
          {products.map((product) => (
            <Carousel.Item key={product.slug}>
              <img
                className="d-block w-100"
                src={product.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}
