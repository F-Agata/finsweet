import Box from "../styles/Box"
import Btn from "../styles/Btn";
import TitleAndText from "../styles/TitleAndText"


const BtnsChoiceProduct = () => {

    return (
        <Box
            // border={'orange 2px solid'}
            p={' 0px 40px '}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                // border={'blue 2px solid'}
                mb={34}
                maxWidth={846}
            >
                <TitleAndText variant={'title1'}
                              p={{_: '0px 40px ', tablet: '0px 60px', }}
                >
                    Choice your product and read more
                </TitleAndText>
            </Box>
            <Box
                mb={62}
                p={'40px 40px'}
                pb={{_: '20px', tablet: '40px', }}
                bg={"colorLight"}
                borderRadius={24}
                width={"100%"}
                display={'flex'}
                flexDirection={{_: 'column', tablet: 'row', }}
                justifyContent={{_: 'center', tablet: 'space-evenly', }}
                alignItems={{_: 'center', tablet: 'stretch', }}
            >
                <Btn variant={'colorLightFromTheme'} >Regular</Btn>
                <Btn variant={'colorLightFromTheme'} >Platinum</Btn>
                <Btn variant={'colorLightFromTheme'} >Standard</Btn>
            </Box>
        </Box>
    );
}

export default BtnsChoiceProduct;

