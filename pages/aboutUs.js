import Box from "../styles/Box";
import WhyShouldYouWorkWithUs from "../components/routes/aboutUs/WhyShouldYouWorkWithUs";
import MoreImpresions from "../components/routes/aboutUs/MoreImpressions";
import CompanyLogos from "../components/routes/aboutUs/CompanyLogos";
import Analyze from "../components/routes/aboutUs/Analyze";
import Workers from "../components/routes/aboutUs/Workers";


const AboutUs = () => {


    return (
        <Box
            border={'orange 2px solid'}
            m={'0 auto'}
            p={{_: '100px 0px 40px 0px', tablet: '150px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
         >
            <WhyShouldYouWorkWithUs/>
            <MoreImpresions/>
            <CompanyLogos/>
            <Analyze/>
            <Workers/>
        </Box>
    );
}

export default AboutUs;

