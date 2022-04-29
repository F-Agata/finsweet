import React  from "react";
import styled, { css } from "styled-components";

import Btn from "../../styles/Btn";
import TitleAndText from "../../styles/TitleAndText";
import Box from "../../styles/Box";

const InputFooterPart = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <Box display={'flex'} flexDirection={'row'}>
            <FormFooter
                // onSubmit={handleSubmit}
                noValidate>
                 <InputFooter placeholder={"Enter your Email"}
                              type={"email"}
                              id={"email"}
                              name={"email"}
                              // value={values.email}
                              // onChange={handleChange}
                 >

                 </InputFooter>
                <Btn variant={'light'} type={"submit"} ml={0} mr={0}>Subscribe</Btn>
            </FormFooter>
        </Box>
    );
}

export default InputFooterPart;

const FormFooter = styled.form`
`

const InputFooter = styled.input`
    
`