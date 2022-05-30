import React, {useState, useEffect} from "react";
import styled from "styled-components";
import TitleAndText from "../../../styles/TitleAndText";
import Box from "../../../styles/Box";
import Link from "../../../styles/Link"

import {helpersFunctionShuffleArray} from "../../helpers/helpersFunctionShuffleArray";

const ReadMorePosts  = ({listPostsItems, listLinksToImg}) => {

    const [shuffledArray, setShuffledArray] = useState(helpersFunctionShuffleArray(listPostsItems))
    const [showFewPosts, setShowFewPosts] = useState(shuffledArray.splice(listPostsItems.length - 3))

    const singlePostToShow = showFewPosts.map((item, index) => {

        return (
            <Box key={`${item.Population}${item.Year}`}
                 width={{_: '100%', tablet: '48%', tabletL: '31%', }}
                 // border={'purple 2px solid'}
                 mb={20}
                 p={20}
            >
                <Link href={`/blog/${item['ID Year']}`}>
                    <Box
                        width={'100%'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        cursor={'pointer'}
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
                                src={listLinksToImg[index].picture.large}
                                alt={"photo"} />
                        </Box>
                        <TitleAndText variant={'title4'}
                                      mb={20}
                                      textAlign={'left'}
                        >
                            {item['ID Year']}  This is a blog post.  Over the past.
                        </TitleAndText>
                        <TitleAndText variant={'textSmall'}
                                      mb={20}
                                      textAlign={'left'}
                        >
                            {index }Over the past {item.Population} few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.
                            {item.Population}
                        </TitleAndText>
                        <TitleAndText variant={'textSmall'}
                                      mb={20}
                                      textAlign={'left'}
                        >
                            {item['ID Year']} {item['ID Nation']} {item['Slug Nation']}
                        </TitleAndText>
                    </Box>
                </Link>
            </Box>
        )
    })

    return (
        <Box
            width={'100%'}
            // border={'yellow 2px solid'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            p={'0px 40px 40px 40px'}
        >
            <Box  mb={20}
                  maxWidth={846}
            >
                <TitleAndText variant={'title1'}
                              mb={20}
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
                {singlePostToShow}
            </Box>
        </Box>
    );
};

export default ReadMorePosts ;

const StyledImg = styled.img`
   border-radius: 24px;
    width: 100%;
  :hover{
    opacity: 50%
  }
`

