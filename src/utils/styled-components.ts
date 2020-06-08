import * as styledComponents from 'styled-components';
import { Theme } from '../components/context/ColorVariable';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export default styled;
