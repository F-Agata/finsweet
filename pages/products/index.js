import Box from '../../styles/Box'

import ProductsHeader from "../../components/routes/products/ProductsHeader";
import GetTheBest from "../../components/routes/products/GetTheBest";
import ChartsPage from "../../components/routes/products/ChartsPage";
import Features from "../../components/routes/products/Features";
import ProductHeader from "../../components/routes/products/product/ProductHeader";

const Products = () => {

    return (
        <Box>
            <ProductsHeader/>
            <GetTheBest/>
            <ChartsPage/>
            <Features/>
        </Box>
    );
}

export default Products;

