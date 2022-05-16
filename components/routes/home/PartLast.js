import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn"
import Link from "../../../styles/Link"
import TitleAndText from "../../../styles/TitleAndText"

const PartLast = () => {

    return (
       <Box
                    // border={'orange 2px solid'}
                    maxWidth={846}
                    textAlign={'center'}
                    m={'0 auto'}
                    p={{_: '0px 40px 40px 40px ', tablet: '0px 60px 40px 60px', }}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <TitleAndText variant={'title1'} mb={34}>Are you ready to grow your business with us?</TitleAndText>
                    <TitleAndText variant={'textSmall'} mb={42} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                    </TitleAndText>
                    <Link href={`/pricing`}>
                        <Btn variant={'dark'}  m={'0 auto'}>View Pricing</Btn>
                    </Link>
       </Box>
    );
}

export default PartLast;

