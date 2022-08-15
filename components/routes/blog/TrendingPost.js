import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import TitleAndText from '../../../styles/TitleAndText'
import Box from '../../../styles/Box'
import BoxColorFulBg from '../../../styles/BoxColorFulBg'
import Link from '../../../styles/Link'

const TrendingPost = ({ listPostsItems, listLinksToImg }) => {
  const [trendingPost, setTrendingPost] = useState(null)
  console.log(listLinksToImg)

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * listPostsItems.length)

    setTrendingPost(
      listPostsItems.find((item, index) => index === randomNumber),
    )
  }, [])

  return (
    <Box>
      {trendingPost && (
        <Link href={`/blog/${trendingPost['ID Year']}`}>
          <Box
            border={'2px solid'}
            borderColor={'colorLight'}
            borderRadius={24}
            p={'40px 40px 20px 40px'}
            display={'flex'}
            flexDirection={{ _: 'column', tabletL: 'row' }}
            justifyContent={{ _: 'center', tabletL: 'space-between' }}
            alignItems={{ _: 'center', tabletL: 'center' }}
            cursor={'pointer'}
          >
            <Box
              // border={'blue 2px solid'}
              width={{ _: '100%', tabletL: '47%' }}
              textAlign={{ _: 'center', tabletL: 'left' }}
            >
              <BoxColorFulBg mb={20}>
                <TitleAndText variant={'textColorful'}>
                  Trending Post
                </TitleAndText>
              </BoxColorFulBg>
              <TitleAndText variant={'title2'} mb={20} mt={20}>
                {trendingPost['ID Year']} New invoicing features to help you get
                paid faster
              </TitleAndText>
              <TitleAndText variant={'textSmall'} mb={20}>
                Over the past {trendingPost.Population} Over the past few
                months, we’ve added several new features to SaaS Invoicing to
                help any business {listPostsItems.length} get paid faster and
                streamline their collection workflows. {trendingPost.Population}
              </TitleAndText>
              <TitleAndText variant={'textSmall'} mb={20}>
                {trendingPost['ID Year']} {trendingPost['ID Nation']}{' '}
                {trendingPost['Slug Nation']}
              </TitleAndText>
            </Box>
            <Box
              borderRadius={'24px'}
              overflow={'hidden'}
              // border={'blue 2px solid'}
              width={{
                _: '80%',
                tablet: '60%',
                tabletL: '47%',
                laptopS: '40%',
                laptop: '35%',
              }}
              textAlign={'center'}
            >
              <StyledImg src={listLinksToImg[7].picture.large} alt={'photo'} />
            </Box>
          </Box>
        </Link>
      )}
    </Box>
  )
}

export default TrendingPost

const StyledImg = styled.img`
  width: 100%;
  border-radius: 24px;
`
