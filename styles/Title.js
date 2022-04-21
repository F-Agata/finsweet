import styled  from "styled-components";
import { variant } from 'styled-system'


const Title = styled(`p`)(
       {
    fontWeight: "theme.fonts.fontBold",
    color: "theme.colors.colorSecondary"
    },
    variant ({
      variants: {
          title1: {
              fontSizes: "fs1",
              lineHeight: "lh1"
          },
          title2: {
              fontSizes: "fs2",
              lineHeight: "lh2"
          },
          title3: {
              fontSizes: "fs3",
              lineHeight: "lh3"
          },
          title4: {
              fontSizes: "fs4",
              lineHeight: "lh4"
          },
          title5: {
              fontSizes: "fs5",
              lineHeight: "lh5"
          },
          title6: {
              fontSizes: "fs6",
              lineHeight: "lh6"
          },
      }
    })
);

export default Title