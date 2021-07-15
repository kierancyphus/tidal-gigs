import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import { useTheme, makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Profile } from './LocalArtistsForHire';

import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  root: (theme: Theme) => ({
    textTransform: 'none',
    paddingLeft: theme.spacing(2),
    marginLeft: -theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    border: 0,
    display: 'flex',
    justifyContent: 'flex-start',
  }),
  row: (theme: Theme) => ({
    display: 'flex',
    textAlign: 'left',
  }),
  icon: (theme: Theme) => ({
    width: theme.spacing(8),
    height: theme.spacing(8),
    // backgroundColor: 'red',
  }),
  avatar: (theme: Theme) => ({
    width: theme.spacing(6),
    height: theme.spacing(6),
    // backgroundColor: 'purple',
  }),
  artist: (theme: Theme) => ({
    width: theme.spacing(52),
    height: theme.spacing(4),
    // backgroundColor: 'orange',
    display: 'flex',
    alignText: 'left',
    flexDirection: 'column',
  }),
  location: (theme: Theme) => ({
    width: theme.spacing(41),
    height: theme.spacing(4),
    // backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
  }),
  genre: (theme: Theme) => ({
    width: theme.spacing(20),
    height: theme.spacing(4),
    // backgroundColor: 'blue',

    display: 'flex',
    alignItems: 'center',
  }),
  group: (theme: Theme) => ({
    width: theme.spacing(20),
    height: theme.spacing(4),
    // backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
  }),
  bookingIcons: (theme: Theme) => ({
    color: theme.palette.grey[500],
    display: 'flex',
    justifyContent: 'space-between',
    width: theme.spacing(18),
    paddingLeft: theme.spacing(5),
  }),
});

export interface ExtendedProfile extends Profile {
  location: string;
  instrument: string;
  group: string;
}

const SearchResultsRow: FC<ExtendedProfile> = ({
  name,
  genre,
  url,
  location,
  instrument,
  group,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <ButtonBase className={classes.root}>
      <Box className={classes.row}>
        <Box className={classes.icon}>
          {url ? (
            <Avatar className={classes.avatar} src={url} />
          ) : (
            <Avatar className={classes.avatar}>AB</Avatar>
          )}
        </Box>
        <Box className={classes.artist}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="subtitle2">{instrument}</Typography>
        </Box>
        <Box className={classes.location}>
          <Typography variant="subtitle1">{location}</Typography>
        </Box>
        <Box className={classes.genre}>
          <Typography variant="subtitle1">{genre}</Typography>
        </Box>
        <Box className={classes.group}>
          <Typography variant="subtitle1">{group}</Typography>
        </Box>
        <Box className={classes.bookingIcons}>
          <ImportContactsIcon color="inherit" />
          <FavoriteIcon color="inherit" />
        </Box>
      </Box>
    </ButtonBase>

    // <Box className={classes.row}>
    //   <Box className={classes.icon}>
    //     {url ? (
    //       <Avatar className={classes.avatar} src={url} />
    //     ) : (
    //       <Avatar className={classes.avatar}>AB</Avatar>
    //     )}
    //   </Box>
    //   <Box className={classes.artist}>
    //     <Typography variant="subtitle1">{name}</Typography>
    //     <Typography variant="subtitle2">{instrument}</Typography>
    //   </Box>
    //   <Box className={classes.location}>
    //     <Typography variant="subtitle1">{location}</Typography>
    //   </Box>
    //   <Box className={classes.genre}>
    //     <Typography variant="subtitle1">{genre}</Typography>
    //   </Box>
    //   <Box className={classes.group}>
    //     <Typography variant="subtitle1">{group}</Typography>
    //   </Box>
    //   <Box className={classes.bookingIcons}>
    //     <ImportContactsIcon color="inherit" />
    //     <FavoriteIcon color="inherit" />
    //   </Box>
    // </Box>
  );
};

export default SearchResultsRow;
