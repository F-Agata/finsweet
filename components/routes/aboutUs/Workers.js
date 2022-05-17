
import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"


import workersItems from "./workersItems";

const Workers = (  ) => {

    const workerItem = workersItems.map((item) => (

        <StyledBoxOneWorker key={item.name}>
            <Box flexGrow={'1'}>
                <TitleAndText variant={'textLarge'}>{item.smallDescription}</TitleAndText>
            </Box>
            <Box
                border={'blue 2px solid'}
                overflow={'hidden'}
                width={56}
                height={56}
                borderRadius={'50%'}
                m={'25px 0 12px 0'}
            >
                <img src={`/${item.icon}`} alt={"photo"} />
            </Box>
            <TitleAndText variant={'title4'}>{item.name}</TitleAndText>
            <TitleAndText variant={'textSmall'}>{item.jobTitle}</TitleAndText>
        </StyledBoxOneWorker>

    ));

    return (
        <Box
            // border={'green 2px solid'}
            m={'0 auto'}
            width={"100%"}
            p={{_: '10px 0px 40px 0px', tablet: '15px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={ 'center'}
            alignItems={'center'}
        >
            <Box  mb={20}
                  maxWidth={846}
                  p={'0px 40px'}
            >
                <TitleAndText variant={'title2'}>The stunning results our customers have experienced</TitleAndText>
            </Box>
            <Box
                // border={'blue 2px solid'}
                p={'0px 40px'}
                textAlign={'center'}
                display={'flex'}
                flexDirection={{_: 'column', tablet: 'row', }}
                justifyContent={{_: 'center', tablet: 'space-evenly', }}
                alignItems={{_: 'center', tablet: 'stretch', }}
                // alignItems={'center'}
                flexWrap={'wrap'}
            >
                {workerItem}
            </Box>
        </Box>
    );
};

export default Workers;

const StyledBoxOneWorker = styled(Box)`
  border: 2px solid;
  border-color: ${props => props.theme.colors.colorLight};
  border-radius: 24px;
  margin: 20px 0;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 48%;
  }
  @media (min-width: 1024px) {
    width: 31%;
  }
  
  
`


