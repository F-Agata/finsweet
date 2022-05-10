import NextLink from 'next/link';

import styled from 'styled-components';


const Link = ({ children, href, ...rest }) => (
    <NextLink href={href} >
        <Container {...rest}>{children}</Container>
    </NextLink>
);

export default Link;

const Container = styled.a`
    display: inherit;
    text-decoration: none;
    cursor: pointer;
  //border: blue 2px solid;

`;