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
    marginBottom: theme.spacing(2),
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
});

interface SearchResultsProps {
  profiles: ExtendedProfile[];
}

const SearchResults: FC<SearchResultsProps> = ({ profiles }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box>
      <Typography variant="subtitle1">Search Results</Typography>
      <Box className={classes.rowContainer}>
        <Box className={classes.row}>
          <Box className={classes.icon} />
          <Box className={classes.artist} />
          <Box className={classes.genre} />
          <Box className={classes.location} />

          <Box className={classes.group} />
        </Box>

        {profiles.map(profile => (
          <SearchResultsRow
            {...profile}
            key={`search_result:${profile.name}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SearchResults;
