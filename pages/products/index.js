import Box from '../../styles/Box'

import ProductsHeader from "../../components/routes/products/ProductsHeader";
import GetTheBest from "../../components/routes/products/GetTheBest";
import ChartsPage from "../../components/routes/products/ChartsPage";

const Products = () => {

    return (
        <Box>
            <ProductsHeader/>
            <GetTheBest/>
            <ChartsPage/>

        </Box>
    );
}

export default Products;

