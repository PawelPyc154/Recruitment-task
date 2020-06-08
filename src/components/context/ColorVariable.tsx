import React from 'react';
import { ThemeProvider } from '../../utils/styled-components';

const colorVariable = {
  backgroundPrimary: '#181818',
  backgroundSecondary: '#252525',
  border: '#313131',
  borderInputBorderFocus: 'white',
  textPrimary: 'white',
  textSecondary: 'gray',
  loader: '#3498db',
  error: 'red',
  scrollbarThumb: 'grey',
  tableRow: '#313131',
  slider: {
    thumb: '#fff',
    vertical: '#000',
    track: '#3498db',
    rail: '#bfbfbf',
    mark: '#bfbfbf',
    markActive: 'currentColor',
    markLabel: '#3498db',
  },
};
export type Theme = typeof colorVariable;

const ColorVariable: React.FC = ({ children }) => <ThemeProvider theme={colorVariable}>{children}</ThemeProvider>;

export default ColorVariable;
