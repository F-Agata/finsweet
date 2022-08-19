import styled from 'styled-components'
import TitleAndText from '../../../styles/TitleAndText'
import Box from '../../../styles/Box'
import Link from '../../../styles/Link'

const AllPosts = ({ listPostsItems, listLinksToImg }) => {
  const allPostsToChoice = listPostsItems.map((item, index) => {
    return (
      <Box
        key={item.Population}
        width={{ _: '100%', tablet: '48%', tabletL: '31%' }}
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
              width={{
                _: '100%',
                mobileXM: '70%',
                mobileL: '50%',
                tablet: '100%',
              }}
              height={'256px'}
              mb={20}
              borderRadius={24}
              overflow={'hidden'}
            >
              <StyledImg
                src={listLinksToImg[index].picture.large}
                alt={'photo'}
              />
            </Box>
            <TitleAndText variant={'title4'} mb={20} textAlign={'left'}>
              {item['ID Year']} New invoicing features to help you get paid
              faster
            </TitleAndText>
            <TitleAndText variant={'textSmall'} mb={20} textAlign={'left'}>
              Over the past {item.Population} few months,{' '}
              {listPostsItems.length} we’ve added several new {index} features
              to SaaS Invoicing to help any business get paid faster and
              streamline their collection workflows.
              {item.Population}
            </TitleAndText>
            <TitleAndText variant={'textSmall'} mb={20} textAlign={'left'}>
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
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={'0px 40px 40px 40px'}
    >
      <Box mb={20} maxWidth={846}>
        <TitleAndText variant={'title1'} mb={20}>
          All posts
        </TitleAndText>
      </Box>

      <Box
        width={'100%'}
        borderRadius={24}
        display={'flex'}
        flexWrap={'wrap'}
        flexDirection={{ _: 'column', tablet: 'row' }}
        justifyContent={{ _: 'center', tablet: 'space-around' }}
        alignItems={'center'}
      >
        {allPostsToChoice}
      </Box>
    </Box>
  )
}

export default AllPosts

const StyledImg = styled.img`
  border-radius: 24px;
  width: 100%;
`
