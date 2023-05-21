import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../Store";
import { CartItem } from "../types/Cart";
import { Product } from "../types/Product";

function ProductItem({ product }: { product: Product }) {


  return (
    <Card className="product-card">
      <Link to={`/product/${product.slug}`}>
        <div
          className="d-flex align-item-center justify-content-center"
          style={{ height: "300px" }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      </Link>
      <Card.Body>
        <Link className="text-decoration-none" to={`/product/${product.slug}`}>
          <Card.Title className="product-name">{product.name}</Card.Title>
        </Link>
        <Card.Text className="product-price">Ksh {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
