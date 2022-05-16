import Box from "../styles/Box";
import WhyShouldYouWorkWithUs from "../components/routes/aboutUs/WhyShouldYouWorkWithUs";
import MoreImpresions from "../components/routes/aboutUs/MoreImpressions";


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
        </Box>
    );
}

export default AboutUs;

