import Box from "../styles/Box";
import WhyShouldYouWorkWithUs from "../components/routes/aboutUs/WhyShouldYouWorkWithUs";


const AboutUs = () => {


    return (
        <Box
            border={'orange 2px solid'}
            m={'0 auto'}
            p={{_: '100px 40px 40px 40px', tablet: '150px 40px 40px 40px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
         >
            <WhyShouldYouWorkWithUs/>
        </Box>
    );
}

export default AboutUs;

