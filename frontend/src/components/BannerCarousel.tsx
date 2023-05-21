import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { RiPlayFill } from "react-icons/ri";
import image1 from "../assets/images/p1.jpg";
import image2 from "../assets/images/p2.jpg";
import image3 from "../assets/images/p3.jpg";

const BannerCarousel = () => {
  return (
    <Container fluid className="header">
      <Row className="header__container">
        <Col xs={12} md={6} className="header__image">
          <img src={image1} alt="header" />
          <img src={image2} alt="header" />
        </Col>
        <Col xs={12} md={6} className="header__content">
          <div>
            <p className="sub__header">Book Now</p>
            <h1>
              The Smiling{" "}
              <span role="img" aria-label="Smiling Face">
                😊
              </span>
              <br />
              agent for travel
            </h1>
            <p className="section__subtitle">
              Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.
            </p>
            <div className="action__btns">
              <Button className="btn">Plan a Trip</Button>
              <div className="story">
                <div className="video__image">
                  <img src={image3} alt="story" />
                  <span>
                    <RiPlayFill />
                  </span>
                </div>
                <span>Watch our story</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerCarousel;
