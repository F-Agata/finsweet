import styled from "styled-components";
import Box from "../../../styles/Box"
import Link from "../../../styles/Link";

const listCompanyLogosName = ['companyLogo1', 'companyLogo2', 'companyLogo3', 'companyLogo4', 'companyLogo5']

const CompanyLogos = () => {

    const companyLogo = listCompanyLogosName.map((item)=> (
        <Box key={item}
            height={40}
             // border={'blue 2px solid'}
             m={20}
        >
            <Link href={`/#`}>
                <StyledAnalyzeIcon src={`/${item}.png`} alt={"logo"} />
            </Link>
        </Box>
    ))

    return (
            <Box
                // border={'green 2px solid'}
                p={'40px 0'}
                width={'100%'}
                display={'flex'}
                justifyContent={ 'space-evenly'}
                alignItems={'center'}
                flexWrap={'wrap'}
                flexGrow={'1'}
            >
                {companyLogo}
            </Box>
       );
};

export default CompanyLogos;

const StyledAnalyzeIcon = styled.img`
  width: 100%;
  
    `
