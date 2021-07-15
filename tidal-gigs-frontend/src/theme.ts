import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  typography: {
    fontFamily: 'Nationale',
    subtitle1: {
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    subtitle2: {
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
    },
  },
});

export default theme;
