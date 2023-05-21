import React from "react";
import { Grid, Paper, ButtonBase } from "@mui/material";
import { AttachMoney } from "@mui/icons-material";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useGetProductsQuery } from "../hooks/productHooks";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import { Link } from "react-router-dom";

interface Product {
  image: string;
  price: number;
  slug: string;
}

const ProductListing: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <div className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Product Listing</strong>
      </h4>

      <Grid container spacing={2}>
        {products?.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.slug}>
            <Link to={`/product/${product.slug}`}>
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
                      <AttachMoney /> {product.price?.toLocaleString("en")}
                    </span>
                  </h5>
                </div>
              </ButtonBase>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductListing;
