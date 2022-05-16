import styled, { css }  from "styled-components";
import { variant, color, space, typography } from 'styled-system';


const TitleAndText = styled.p`
    text-decoration: none;
    font-family:  'Roboto', sans-serif;
    ${({ theme })=>css`
        color: ${theme.colors.colorPrimary};
    `};
    ${color};
    ${space};
    ${typography};
    ${
      variant ({
          variants: {
              title1: {
                  fontSize: "fs1",
                  lineHeight: "lh1",
                  fontWeight: "fontBold",
                },
              title2: {
                  fontSize: "fs2",
                  lineHeight: "lh2",
                  fontWeight: "fontBold"
              },
              title3: {
                  fontSize: "fs3",
                  lineHeight: "lh3",
                  fontWeight: "fontBold"
              },
              title4: {
                  fontSize: "fs4",
                  lineHeight: "lh4",
                  fontWeight: "fontBold"
              },
              title5: {
                  fontSize: "fs5",
                  lineHeight: "lh5",
                  fontWeight: "fontBold"
              },
              title6: {
                  fontSize: "fs6",
                  lineHeight: "lh6",
                  fontWeight: "fontBold"
              },
              textSmall: {
                 fontSize: "fs6",
                 lineHeight: "lh6",
                 fontWeight: "fontRegular"
            },
              textLarge: {
                fontSize: "fs5",
                lineHeight: "lh5",
                fontWeight: "fontRegular"
            },
            textColorful: {
              fontSize: "fs4",
              lineHeight: "lh4",
              fontWeight: "fontRegular",
            },
          }
      })
    };
`;

export default TitleAndText;