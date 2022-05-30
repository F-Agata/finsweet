import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import partInfoItems from '../contact/partInfoItems';
import Link from "../../../styles/Link";
import Btn from "../../../styles/Btn";


const ContactPartInfo = () => {

    const partInfoItem = partInfoItems.map((item) => (
        <Box key={item.icon}
             // border={'pink 2px solid'}
             p={{ _: '10px 0 ', tablet: '0px 20px 20px 0px', tabletL: '0px 20px 20px 20px', }}
             display={'flex'}
             flexDirection={{ _: 'column',tablet: 'row', }}
             justifyContent={{ _: 'center',tablet: 'flex-start', }}
             alignItems={'center'}
        >
            <Box
                m={{ _: '20px 0 0 0  ', tablet: '0px 20px 10px 0px', }}
                width={56}
                hight={56}
            >
                <img src={`/contact/${item.icon}.png`} alt={"icon"} />
            </Box>

            <Box>
                <TitleAndText variant={'title5'}
                              mb={10}
                              textAlign={{ _: 'center',tablet: 'left', }}
                >
                    {item.title}
                </TitleAndText>
                <TitleAndText variant={'textSmall'}
                              mb={10}
                              textAlign={{ _: 'center',tablet: 'left', }}
                >
                    {item.smallDescription}
                </TitleAndText>
            </Box>
        </Box>
    ));

    return (
        <Box
            // border={'orange 2px solid'}
            width={{_: '100%', tabletL: '33%', }}
            mt={{_: '20px', tablet: '60px', tabletL: '0px', }}
            display={'flex'}
            flexWrap={'wrap'}
            flexDirection={{_: 'column', tablet: 'row', tabletL: 'column' }}
            justifyContent={{_: 'center', tablet: 'space-evenly', tabletL: 'flex-end' }}
            alignItems={{_: 'center', tablet: 'center', tabletL: 'flex-start' }}
        >
            {partInfoItem}
            <Box
                width={"100%"}
                mt={20}
            >
                <Link href={`/faq`}><Btn variant={'dark'} width={'100%'} m={0}>FAQ</Btn></Link>
            </Box>

        </Box>
    );
}

export default ContactPartInfo;


