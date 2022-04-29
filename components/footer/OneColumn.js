import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../styles/TitleAndText";
import Box from "../../styles/Box";


const OneColumn = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <BoxOneColumn>
            <TitleAndText variant={'title5'} color={"colorWhite"}>sdfdsf</TitleAndText>
            <TitleAndText variant={'textSmall'} color={"colorWhite"}>dfdsfsdfsf</TitleAndText>
        </BoxOneColumn>
    );
}

export default OneColumn;

const BoxOneColumn = styled(Box)`
    display: flex;
    flex-direction: column;
`
