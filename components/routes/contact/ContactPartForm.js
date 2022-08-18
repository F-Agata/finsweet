import TitleAndText from '../../../styles/TitleAndText'
import Box from '../../../styles/Box'

import Form from './Form'

const ContactPartForm = () => {
  return (
    <Box
      width={{ _: '100%', tabletL: '65%' }}
      mt={{ _: '40px', tabletL: '0px' }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={{ _: 'center', tablet: 'flex-start' }}
      alignItems={'center'}
    >
      <Box alignSelf={{ _: 'center', tabletL: 'flex-start' }}>
        <TitleAndText
          variant={'title3'}
          mb={10}
          textAlign={{ _: 'center', tabletL: 'left' }}
        >
          Drop us a message
        </TitleAndText>
        <TitleAndText
          variant={'textLarge'}
          mb={40}
          textAlign={{ _: 'center', tabletL: 'left' }}
        >
          We will get back to you as soon as possible.
        </TitleAndText>
      </Box>
      <Box width={'100%'}>
        <Form />
      </Box>
    </Box>
  )
}

export default ContactPartForm
