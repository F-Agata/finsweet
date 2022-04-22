import styled, { css } from "styled-components";
import { variant,  color, space, layout, flexbox, grid, border, shadow, position, background, typography  } from "styled-system";


const Box = styled.div`
  ${color};
  ${space};
  ${layout};
  ${flexbox};
  ${grid};
  ${border};
  ${shadow};
  ${position};
  ${background};
  ${typography};
`;


export default Box;