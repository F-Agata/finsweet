import styled  from "styled-components";
import { variant, color, space } from 'styled-system';


const Title = styled.p`
    ${({ theme })=>`
        fontWeight: ${theme.fonts.fontBold};
        color: ${theme.colors.colorSecondary};
    `};
    ${color};
    ${space};
    ${
      variant ({
          variants: {
              title1: {
                  fontSize: "fs1",
                  lineHeight: "lh1"
              },
              title2: {
                  fontSize: "fs2",
                  lineHeight: "lh2"
              },
              title3: {
                  fontSize: "fs3",
                  lineHeight: "lh3"
              },
              title4: {
                  fontSize: "fs4",
                  lineHeight: "lh4"
              },
              title5: {
                  fontSize: "fs5",
                  lineHeight: "lh5"
              },
              title6: {
                  fontSize: "fs6",
                  lineHeight: "lh6"
              },
          }
      })
    };
`;

export default Title;