import styled from 'styled-components'

import Box from '../styles/Box'
import LogoVectorDark from '../public/LogoVectorDark.svg'
import LogoVectorLight from '../public/LogoVectorLight.svg'

const Logo = ({ color }) => {
  return (
    <BoxLogo>
      {color === 'dark' && <LogoIcon src={LogoVectorDark.src} alt={'logo'} />}
      {color === 'light' && <LogoIcon src={LogoVectorLight.src} alt={'logo'} />}
    </BoxLogo>
  )
}

export default Logo

const BoxLogo = styled(Box)`
  height: 32px;
  width: 140px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const LogoIcon = styled.img`
  width: 100%;
`
