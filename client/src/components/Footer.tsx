import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram ,FaWhatsapp} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  return (
  <>
      <div className="container py-5">
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4">
              <a href="#">
                <FaFacebookF className="me-3" />
              </a>
              <a href="#">
                <FaTwitter className="me-3" />
              </a>
              <a href="#">
                <FaWhatsapp className="me-3" />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="tel:+1234567890">+254 (734) 567-890</a>
              </li>
              <li>
                <a href="mailto:support@example.com">support@example.com</a>
              </li>
              <li>
                <address>Karen, Nairobi</address>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Newsletter</h5>
            <p className="mt-3">
              Subscribe to our newsletter to get the latest news and updates.
            </p>
            <form className="mt-4">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>

      <div className="bg-secondary py-3">
        <div className="container text-center">
          <p className="mb-0 text-white"> &copy; {currentYear} Emy Collection. All rights reserved.
          </p>
        </div>
      </div>
   </>
  );
};

export default Footer;
