import Box from "../styles/Box";
import WhyShouldYouWorkWithUs from "../components/routes/aboutUs/WhyShouldYouWorkWithUs";
import MoreImpresions from "../components/routes/aboutUs/MoreImpressions";
import CompanyLogos from "../components/routes/aboutUs/CompanyLogos";
import Analyze from "../components/routes/aboutUs/Analyze";
import Workers from "../components/routes/aboutUs/Workers";


const AboutUs = () => {


    return (
        <Box>
            <WhyShouldYouWorkWithUs/>
            <MoreImpresions/>
            <CompanyLogos/>
            <Analyze/>
            <Workers/>
        </Box>
    );
}

export default AboutUs;

