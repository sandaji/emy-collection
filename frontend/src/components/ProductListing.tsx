import React from "react";
import { Grid, Paper, ButtonBase } from "@mui/material";
import { AttachMoney } from "@mui/icons-material";

type Product = {
  image: string;
  price: number;
};

const products: Product[] = [
  {
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp",
    price: 123,
  },
  {
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(6).webp",
    price: 58,
  },
];

const ProductListing: React.FC = () => {
  return (
    <div className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Product Listing</strong>
      </h4>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ButtonBase
              focusRipple
              component={Paper}
              elevation={3}
              className="product-card"
              style={{ width: "100%" }}
            >
              <img
                src={product.image}
                alt="Product"
                className="product-image"
                style={{ width: "100%" }}
              />
              <div className="product-overlay">
                <h5>
                  <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                    <AttachMoney /> {product.price.toLocaleString("en-KES")}
                  </span>
                </h5>
              </div>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductListing;
