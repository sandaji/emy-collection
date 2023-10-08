import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../Store";
import { CartItem } from "../types/Cart";
import { Product } from "../types/Product";
import { convertProductToCartItem } from "../utils";
import Rating from "./Rating";

function TrendingItems({ product }: { product: Product }) {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    toast.success("Product added to the cart");
  };

  return (
    <Card className="product-card">
      {" "}
      {/* Add custom class */}
      <Link to={`/product/${product.slug}`}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link className="text-decoration-none" to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text className="product-price">
          Ksh {product.price}
        </Card.Text>{" "}
        {/* Add custom class */}
        {product.countInStock === 0 ? (
          <Button variant="danger" disabled>
            Out of stock
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(convertProductToCartItem(product))}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default TrendingItems;
