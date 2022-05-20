import styled, { css } from "styled-components";

import TitleAndText from "../../../styles/TitleAndText"
import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";
import Link from "../../../styles/Link"

import Form from "./Form";


const ContactPartForm = () => {


    return (
        <Box
            // border={'orange 2px solid'}
            width={{_: '100%', tabletL: '65%', }}
            mt={{_: '40px', tabletL: '0px', }}
            display={'flex'}
            flexDirection={ 'column'}
            justifyContent={{ _: 'center',tablet: 'flex-start', }}
            alignItems={'center'}
        >
            <Box
                alignSelf={{ _: 'center',tabletL: 'flex-start', }}
            >
                <TitleAndText variant={'title3'}
                              mb={10}
                              textAlign={{ _: 'center',tabletL: 'left', }}
                              // bg={'yellow'}
                >
                    Drop us a message
                </TitleAndText>
                <TitleAndText variant={'textLarge'}
                              mb={40}
                              textAlign={{ _: 'center',tabletL: 'left', }}
                              // bg={'yellow'}
                >
                    We will get back to you as soon as possible.
                </TitleAndText>
            </Box>
            <Box
                // border={'pink 2px solid'}
                width={'100%'}>
                <Form/>
            </Box>
        </Box>
    );
}

export default ContactPartForm;


