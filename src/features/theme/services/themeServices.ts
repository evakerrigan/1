import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const themeServices = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: 'rgb(0 0 0 / 0);',
        },
      },
    },
  },
});
