import { Button, Col, Container, Image, Row } from "react-bootstrap";
import image2 from "../assets/images/p2.jpg";
import image3 from "../assets/images/p3.jpg";
import { FaArrowRight, FaPlus, FaShoppingCart } from "react-icons/fa";

const BannerCarousel = () => {
  return (
    <Container className="text-center mt-5">
      <Row className=" items-center">
        <Col md={6} className="">
          <Row className="">
            <p className="ms-0 mt-5 ">
              smart Shopping starts here <FaArrowRight />
            </p>
            <Row className="">
              <h1 className=" mt-5">
                unleash the power of <br />
                Emy Collections <FaShoppingCart className="fs-2 text-primary" />
              </h1>
              <p className="mt-2">
                Make your shopping more enjoyable with us. We are the best
                online shopping website and we are providing the best customer
                services for our clients.
              </p>
            </Row>
            <Row className=" mt-5 ">
              <Button size="sm" className="btn bg-gray outline-none  mt-5">Shop Now</Button>
              <div className="d-flex align-items-center gap-5">
                <div className="position-relative my-4 ms-5  ">
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
            </Row>
          </Row>
        </Col>
        <Col md={6}>
          <Image src={image2} alt="header" fluid rounded />
        </Col>
      </Row>
    </Container>
  );
}; 
export default BannerCarousel;
