import breakpoints from './theme/breakpoints'
import space from './theme/space'

export default {
  colors: {
    colorPrimary: "#1D2130",
    colorSecondary: "#6B7CFF",
    colorLight: "#E0E4FC",
    colorIcon: "#503AE7",
    colorBtnHover: "#313852",
    colorWhite: "#FFFFFF",
    colorLightFooter: "#C4C4C4",
  },
  gradients: {
    gradientLabel: "linear-gradient(53.94deg, #373FFF 15.02%, #3ACAF8 82.83%);",
    gradientBlur: "radial-gradient(#D798E1 7.55%,  #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)",
    // gradientBlur: "radial-gradient(#D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)",
    // gradientBlur: "radial-gradient(483.9% 2719.65% at -49.5% -250%, #D798E1 17.55%, #9BFFA5 27.56%, #AED3FF 49.89%, #C9D4EF 56.53%, #CACFFA 65.69%)",
   },
  fontWeights: {
    fontRegular: `400`,
    fontBold: `700`,
  },
  // fontSizes: [56px, 48px, 36px, 24px, 18px, 16px ],
  fontSizes: {
    fs1: "56px",
    fs2: "48px",
    fs3: "36px",
    fs4: "24px",
    fs5: "18px",
    fs6: "16px",
  },
  lineHeight: {
    lh1: "110%",
    lh2: "120%",
    lh3: "120%",
    lh4: "140%",
    lh5: "150%",
    lh6: "150%",
  },
  breakpoints,
  space
};
