import styled from "styled-components";
import TitleAndText from "../../../styles/TitleAndText";
import Box from "../../../styles/Box";
import Link from "../../../styles/Link"



const ReadMorePosts  = () => {

    return (

        <Box
            width={'100%'}
            // border={'yellow 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            p={'40px 40px 40px 40px'}
        >
            <Box  mb={20}
                  maxWidth={846}
            >
                <TitleAndText variant={'title1'}
                              mb={20}
                              textALign={'center'}
                >
                    Read more posts
                </TitleAndText>
            </Box>


            <Box
                width={'100%'}
                // border={'blue 2px solid'}
                borderRadius={24}
                // p={'40px 40px'}

                display={'flex'}
                flexWrap={'wrap'}
                flexDirection={{_: 'column', tablet: 'row', }}
                justifyContent={{_: 'center', tablet: 'space-around', }}
                alignItems={'center'}
            >

                <Box
                    width={{_: '100%', tablet: '48%', tabletL: '31%', }}
                    // border={'purple 2px solid'}
                    mb={20}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box
                        // border={'orange 2px solid'}
                        width={{_: '100%', mobileXM: '70%', mobileL: '50%', tablet: '100%', }}
                        height={'256px'}
                        mb={20}
                        borderRadius={24}
                        overflow={'hidden'}
                    >
                        <StyledImg
                            src={`/freeTrial/man-working-from-home-5198252.png`}
                            alt={"photo"} />
                    </Box>
                    <TitleAndText variant={'title4'}
                                  mb={20}
                                  textAlign={'left'}
                    >
                        New invoicing features to help you get paid faster
                        {/*{trendingPost.location.city} new invoicing features*/}
                    </TitleAndText>
                    <TitleAndText variant={'textSmall'}
                                  mb={20}
                                  textAlign={'left'}
                    >
                        Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.
                        {/*{trendingPost.email}*/}
                    </TitleAndText>
                    <TitleAndText variant={'textSmall'}
                                  mb={20}
                                  textAlign={'left'}
                    >
                        autor, data
                        {/*{trendingPost.name.title} {trendingPost.name.first} {trendingPost.name.last} , data*/}
                    </TitleAndText>

                </Box>
            </Box>

        </Box>
    );
}

export default ReadMorePosts ;



const StyledImg = styled.img`
   border-radius: 24px;
    width: 100%;
  :hover{
    opacity: 50%
  }
`

