import styled, { css } from "styled-components";
import TitleAndText from "../../../styles/TitleAndText";
import Box from "../../../styles/Box";

const SinglePost = ({chosenPost}) => {

    console.log(chosenPost)

    return (
        <Box
            // border={'orange 2px solid'}
            m={'0 auto'}
            p={{_: '100px 0px 40px 0px', tablet: '150px 0px 40px 0px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
            position={'relative'}
        >
            <BoxStyledGradient1/>
            <BoxStyledGradient2/>
            <Box zIndex={'1'}
                 width={"100%"}
                // border={'yellow 2px solid'}
                 display={'flex'}
                 flexDirection={'column'}
                 justifyContent={'center'}
                 alignItems={'center'}
                 p={'40px 40px 20px 40px'}
            >
                <Box
                    // border={'orange 2px solid'}
                    maxWidth={846}
                    p={{_: '0px 40px ', tablet: '0px 60px', }}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <TitleAndText variant={'title2'} mb={24}>
                        {/*{chosenPost.location.city} new invoicing features*/}
                    </TitleAndText>
                    <TitleAndText variant={'textSmall'} mb={32}
                    >
                        {/*{chosenPost.name.title} {chosenPost.name.first} {chosenPost.name.last} , data*/}
                    </TitleAndText>
                </Box>
                <Box
                    width={'100%'}
                    maxHeight={512}
                    // border={'orange 2px solid'}
                    mb={20}
                    borderRadius={24}
                    overflow={'hidden'}

                >
                    <StyledImg
                        // src={`${chosenPost.picture.large}`}
                        alt={"photo"} />
                </Box>
                <Box
                    maxWidth={846}
                    p={{_: '0px 40px ', tablet: '0px 60px', }}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >

                    <TitleAndText variant={'textSmall'} >
                        {/*{chosenPost.location.city} */}
                        Over the past few months, we’ve added several new features to SaaS Invoicing to help any
                        business
                        get paid faster and  data .Lorem ipsUt non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.um dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
                    </TitleAndText>
                </Box>
            </Box>
        </Box>
    );
}

export default SinglePost;

const BoxStyledGradient1 = styled(Box)`
  position: absolute;
  top: 40%;
  left: -10%;
  width: 446px;
  height: 446px;
  border-radius: 488px;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(100px);
 `
const BoxStyledGradient2 = styled(Box)`
  position: absolute;
  top: 0%;
  left: 60%;
  width: 510px;
  height: 510px;
  border-radius: 600px;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(100px);
 `
const StyledImg = styled.img`
   border-radius: 24px;
    width: 100%;
  ;
`
