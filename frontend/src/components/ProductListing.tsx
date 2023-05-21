import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useGetCategoryImages } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  image: string;
}

const ProductListing: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categoryImages } = await useGetCategoryImages();
        setCategories(categoryImages || []);
        setIsLoading(false);
      } catch (error: unknown) {
        setError(error as ApiError);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <LoadingBox />;
  }

  if (error) {
    return <MessageBox variant="danger">{getError(error)}</MessageBox>;
  }

  return (
    <div className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Categories</strong>
      </h4>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {categories.map((category: Category) => (
          <Col key={category.name}>
            <Link to={`/category/${category.name}`}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={category.image}
                  alt={category.name}
                  className="product-image"
                />
                <Card.Body>
                  <div className="product-overlay">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                        {category.name}
                      </span>
                    </h5>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListing;
