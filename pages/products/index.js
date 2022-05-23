import Box from '../../styles/Box'

import ProductsHeader from "../../components/routes/products/ProductsHeader";
import GetTheBest from "../../components/routes/products/GetTheBest";
import ChartsPage from "../../components/routes/products/ChartsPage";
import Features from "../../components/routes/products/Features";
import ProductHeader from "../../components/routes/products/productSingle/ProductHeader";
import products from "../../components/routes/products/productSingle/productInfoItems";
import BtnsChoiceProduct from "../../components/BtnsChoiceProduct";

const Products = ({productInfoItems}) => {

    console.log(productInfoItems)

    return (
        <Box>
            <ProductsHeader/>
            <BtnsChoiceProduct/>
            <GetTheBest/>
            <ChartsPage/>
            <Features/>
        </Box>
    );
}

export default Products;

export async function getStaticProps(context) {


    const productInfoItems = products

    return {
        props: {productInfoItems: productInfoItems}, // will be passed to the page component as props
    }
}

