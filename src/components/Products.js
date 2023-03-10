import styled from "styled-components";
import Product from "./Product";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProductsList = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://canadas-hardware.onrender.com/api/products?category=${cat}`
            : "https://canadas-hardware.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
      cat &&
        setFilteredProducts(
          products.filter(item =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    },
    [products, cat, filters]);

    useEffect(() => {
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }, [sort]);

  return (
    <section>
      <Wrapper>
        <ProductsList>
          {cat
            ? filteredProducts.map((item) => (
                <Product item={item} key={item.id} />
              ))
            : products
                .slice(0, 8)
                .map((item) => <Product item={item} key={item.id} />)}
        </ProductsList>
      </Wrapper>
    </section>
  );
};

export default Products;
