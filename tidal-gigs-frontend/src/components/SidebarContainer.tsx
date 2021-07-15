import Box from '@material-ui/core/Box';
import { ReactNode, FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Dots from '@material-ui/icons/MoreHoriz';
import sidebarImage from '../assets/sidebar_image.svg';

import { Theme } from '@material-ui/core/styles/createTheme';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: (theme: Theme) => ({
    display: 'flex',
  }),
  top: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: `0px ${theme.spacing(4)}px`,
    alignItems: 'center',
  }),
  nav: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: `0px ${theme.spacing(4)}px`,
    marginTop: theme.spacing(6),
  }),
  profilePicture: (theme: Theme) => ({
    fontSize: theme.spacing(1.5), // I should figure out how to use typography for this
    width: theme.spacing(4),
    height: theme.spacing(4),
  }),
  dots: (theme: Theme) => ({
    color: theme.palette.grey[400],
  }),
  title: (theme: Theme) => ({
    color: theme.palette.grey[200],
    marginBottom: theme.spacing(2.5),
    fontSize: '16px',
    fontWeight: 500,
  }),
  svgContainer: (theme: Theme) => ({
    marginTop: theme.spacing(4),
  }),
  svg: {
    height: '450px',
    width: '225px',
  },
  sidebar: (theme: Theme) => ({
    width: theme.spacing(40),
    paddingTop: theme.spacing(3), // `${theme.spacing(3)}px ${theme.spacing(4)}px`,
    background: '#242528',
    // background: theme.palette.grey[900],
    height: '100vh',
  }),
  children: (theme: Theme) => ({
    marginLeft: theme.spacing(40),
    display: 'flex',
    height: '100%',
    width: '100%',
  }),
});

interface SidebarContainerProps {
  children: ReactNode;
}

const SidebarContainer: FC<SidebarContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const navs = ['Home', 'Explore', 'Videos', 'Bookings'];

  return (
    <Box className={classes.root}>
      <Drawer variant="permanent" anchor="left">
        <Box className={classes.sidebar}>
          <Box className={classes.top}>
            <Avatar className={classes.profilePicture}>JU</Avatar>
            <Dots className={classes.dots} />
          </Box>
          <Box className={classes.nav}>
            {navs.map(title => (
              <Typography key={title} variant="body1" className={classes.title}>
                {title}
              </Typography>
            ))}
          </Box>
          <Box className={classes.svgContainer}>
            <img src={sidebarImage} alt="sidebar" className={classes.svg} />
          </Box>
        </Box>
      </Drawer>

      <Box className={classes.children}>{children}</Box>
    </Box>
  );

  return (
    <Grid container>
      <Grid item sm={2}>
        <Box className={classes.root}>
          <Box className={classes.top}>
            <Avatar className={classes.profilePicture}>JU</Avatar>
            <Dots className={classes.dots} />
          </Box>
          <Box className={classes.nav}>
            {navs.map(title => (
              <Typography key={title} variant="body1" className={classes.title}>
                {title}
              </Typography>
            ))}
          </Box>
          <Box className={classes.svgContainer}>
            <img src={sidebarImage} alt="sidebar" className={classes.svg} />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SidebarContainer;
