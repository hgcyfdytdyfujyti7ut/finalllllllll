import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/fakeStore";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  const navigateToProductDetails = (id)=> {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={navigateToProductDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;