import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"

import getTheBestListItems from "./getTheBestListItems";

const GetTheBestList = () => {

    const getTheBestItem = getTheBestListItems.map((item) => (
        <Box key={item.icon}
            // border={'pink 2px solid'}
             p={'0px 0px 30px 0'}
             display={'flex'}
             flexDirection={'column'}
             justifyContent={'flex-start'}
             textAlign={'left'}
             width={{_: '100%', tablet: '47%', tabletL: '30%', }}
        >
            <Box
                mb={10}
                width={56}
                hight={56}
            >
                <img src={`/products/${item.icon}.svg`} alt={"icon"} />
            </Box>

            <Box >
                <TitleAndText variant={'title5'} mb={10}>{item.title}</TitleAndText>
                <TitleAndText variant={'textSmall'}mb={10}>{item.smallDescription}</TitleAndText>
            </Box>
        </Box>
    ));


    return (
        <Box
            // border={'orange 2px solid'}
            display={'flex'}
            flexWrap={'wrap'}
            flexDirection={{_: 'column', tablet: 'row', }}
            justifyContent={{_: 'center', tablet: 'space-between', }}
            alignItems={{_: 'flex-start', tablet: 'stretch', }}
        >
                {getTheBestItem}
        </Box>
    );
}

export default GetTheBestList;


