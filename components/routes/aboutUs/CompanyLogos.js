import styled from 'styled-components'
import Box from '../../../styles/Box'
import Link from '../../../styles/Link'

import listCompanyLogosName from './listCompanyLogosName'

const CompanyLogos = () => {
  const companyLogo = listCompanyLogosName.map((item) => (
    <Box key={item} height={40} m={20}>
      <Link href={`/#`}>
        <StyledCompanyIcon src={`/aboutUs/${item}.png`} alt={'logo'} />
      </Link>
    </Box>
  ))

  return (
    <Box
      p={'40px 0'}
      m={'40px 0px'}
      width={'100%'}
      display={'flex'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
      flexWrap={'wrap'}
      flexGrow={'1'}
    >
      {companyLogo}
    </Box>
  )
}

export default CompanyLogos

const StyledCompanyIcon = styled.img`
  width: 100%;
`
