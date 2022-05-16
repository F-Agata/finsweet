import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import BoxColorFulBg from "../../../styles/BoxColorFulBg"

const whyItems = [
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.",
"Lorem ipsum dolor sit amet,labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
]

const WhyShouldYouWorkWithUs = () => {

    const whyItem = whyItems.map((item) => (
        <Box key={item}
            // border={'pink 2px solid'}
             // mb={{_: '20px', tabletL: '0', }}
             p={'0px 0px 20px 0'}
             display={'flex'}
             justifyContent={'flex-start'}
             textAlign={'left'}
        >
            <Box
                // border={'pink 2px solid'}
                // mb={20}
                pr={20}
            >
                <img src={`iconArrowRight.svg`} alt={"icon"} />
            </Box>

            <Box >
                <TitleAndText variant={'textSmall'}>{item}</TitleAndText>
            </Box>
        </Box>
    ));


    return (
        <Box
            // border={'orange 2px solid'}
            display={'flex'}
            flexDirection={{_: 'column', tablet: 'row', }}
            justifyContent={{_: 'center', tablet: 'space-between', }}
            alignItems={'flex-start'}
        >
            <Box
                width={{_: '100%', tablet: '47%', }}
            >
                <BoxColorFulBg
                    mb={40}
                >
                    <TitleAndText variant={'textColorful'}
                                  colorFulBg
                    >
                        Why should you work with us?
                    </TitleAndText>
                </BoxColorFulBg>
                <TitleAndText variant={'title3'}
                              mb={40}
                >
                    To upscale your business to the next level
                </TitleAndText>
                <TitleAndText variant={'textSmall'}
                              mb={40}
                >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
                </TitleAndText>
            </Box>
            <Box
                width={{_: '100%', tablet: '47%', }}
            >
                {whyItem}
            </Box>

        </Box>
    );
}

export default WhyShouldYouWorkWithUs;

