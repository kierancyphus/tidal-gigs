import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import { useTheme, makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SearchResultsRow, { ExtendedProfile } from './SearchResultsRow';

const useStyles = makeStyles({
  rowContainer: (theme: Theme) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  }),
  row: (theme: Theme) => ({
    display: 'flex',
    height: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }),
  icon: (theme: Theme) => ({
    width: theme.spacing(8),
    height: theme.spacing(2),
    // backgroundColor: 'red',
  }),
  avatar: (theme: Theme) => ({
    width: theme.spacing(6),
    height: theme.spacing(6),
    // backgroundColor: 'purple',
  }),
  artist: (theme: Theme) => ({
    width: theme.spacing(52),
    // height: theme.spacing(4),
    // backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'column',
  }),
  location: (theme: Theme) => ({
    width: theme.spacing(41),
    // height: theme.spacing(4),
    // backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
  }),
  genre: (theme: Theme) => ({
    width: theme.spacing(20),
    // height: theme.spacing(4),
    // backgroundColor: 'blue',

    display: 'flex',
    alignItems: 'center',
  }),
  group: (theme: Theme) => ({
    width: theme.spacing(20),
    // height: theme.spacing(4),
    // backgroundColor: 'yellow',

    display: 'flex',
    alignItems: 'center',
  }),
  filler: (theme: Theme) => ({
    height: '100vh',
  }),
  titleText: (theme: Theme) => ({
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '12px',
    letterSpacing: '0.02em',
    color: theme.palette.grey[500],
  }),
});

interface SearchResultsProps {
  profiles: ExtendedProfile[];
  onClick: (name: string, url: string, genre: string, id: number) => void;
}

const SearchResults: FC<SearchResultsProps> = ({ profiles, onClick }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box>
      <Typography variant="subtitle1">Search Results</Typography>
      <Box className={classes.rowContainer}>
        <Box className={classes.row}>
          <Box className={classes.icon} />
          <Box className={classes.artist}>
            <Typography className={classes.titleText}>ARTIST</Typography>
          </Box>
          <Box className={classes.location}>
            <Typography className={classes.titleText}>LOCATION</Typography>
          </Box>
          <Box className={classes.genre}>
            <Typography className={classes.titleText}>GENRE</Typography>
          </Box>
          <Box className={classes.group}>
            <Typography className={classes.titleText}>GROUP</Typography>
          </Box>
        </Box>

        {profiles.length > 0 ? (
          profiles.map(profile => (
            <SearchResultsRow
              {...profile}
              key={`search_result:${profile.name}`}
              onClick={onClick}
            />
          ))
        ) : (
          <Box className={classes.filler} />
        )}
      </Box>
    </Box>
  );
};

export default SearchResults;
