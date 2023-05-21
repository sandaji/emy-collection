import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { RiPlayFill } from "react-icons/ri";
import image1 from "../assets/images/p1.jpg";
import image2 from "../assets/images/p2.jpg";
import image3 from "../assets/images/p3.jpg";
import { FaPlay, FaPlus, FaShoppingCart } from "react-icons/fa";

const BannerCarousel = () => {
  return (
    <Container fluid className="header">
      <Row className="section__container header__container">
        <Col className="header__image">
          <Image src={image1} alt="header" />
          <Image src={image2} alt="header" />
        </Col>
        <Col className="header__content">
          <div>
            <p className="sub__header">Shop Now</p>
            <h1>
              Emy Collections <FaShoppingCart className="fs-2 text-primary" />
            </h1>
            <p className="section__subtitle">
              Make your shopping more enjoyable with us. We are the best online
              shopping website and we are providing the best customer services
              for our clients.
            </p>
            <div className="action__btns">
              <Button className="btn bg-indigo">Shop Now</Button>
              <div className="d-flex align-items-center gap-5">
                <div className="position-relative">
                  <Image
                    src={image3}
                    alt="story"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "100%",
                      boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <span
                    className="position-absolute"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "100%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <FaPlus
                      className="fs-2 fw-bold bg-light"
                      style={{
                        padding: "0.5rem",
                        color: "red",
                        borderRadius: "100%",
                        boxShadow: "5px 5px 30px #0000001a",
                      }}
                    />
                  </span>
                </div>
                <span>Browse Categories</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerCarousel;
