import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../styles/TitleAndText";
import Box from "../styles/Box";
import ProductHeader from "../components/routes/products/product/ProductHeader";
import Product2ColorfulTitle from "../components/routes/products/product/Product2ColorfulTitle";
import ProductInfo from "../components/routes/products/product/ProductInfo";
import Btn from "../styles/Btn";


const Blog = () => {



    return (
        <Box>
            <ProductHeader/>
            <Product2ColorfulTitle/>
            <ProductInfo/>
        </Box>
    );
}

export default Blog;
