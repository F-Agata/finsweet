import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../styles/TitleAndText";
import Box from "../../styles/Box";
import ProductHeader from "../../components/routes/products/productSingle/ProductHeader";
import Product2ColorfulTitle from "../../components/routes/products/productSingle/Product2ColorfulTitle";
import ProductInfo from "../../components/routes/products/productSingle/ProductInfo";
import products from "../../components/routes/products/productSingle/productInfoItems";
import Btn from "../../styles/Btn";

const ProductSingle = ({chosenProduct}) => {

    console.log(chosenProduct)

    return (
        <Box>
            <ProductHeader/>
            <Product2ColorfulTitle/>
            <ProductInfo chosenProduct={chosenProduct}/>
        </Box>
    );
}

export default ProductSingle;

export async function getStaticPaths() {

    const productInfoItems = products;

    const paths = [];

    productInfoItems.forEach((product)=>{
        paths.push({params: {slug: `${product.id}`}})
    })


    return {
        paths
         ,
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {

    const slug = context.params?.slug

    const productInfoItems = products

    const chosenProduct = productInfoItems.find((item) => item.id === slug)

    return {
        props: {chosenProduct: chosenProduct}, // will be passed to the page component as props
    }
}
