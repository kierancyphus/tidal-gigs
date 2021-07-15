import { FC } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createTheme';
import Button from '@material-ui/core/Button';

export const useStyles = makeStyles({
  root: (theme: Theme) => ({
    padding: theme.spacing(4),
  }),
  title: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    marginBottom: theme.spacing(3),
  }),
  square: (theme: Theme) => ({
    width: '140px',
    height: '140px',
    backgroundColor: theme.palette.grey[500],
  }),
  venueContainer: (theme: Theme) => ({
    display: 'flex',
  }),
  vibe: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  vibeContainer: (theme: Theme) => ({
    marginRight: theme.spacing(4),
    padding: `0 ${theme.spacing(1)}px`,
    textTransform: 'none',
  }),
  name: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
    marginTop: theme.spacing(2),
  }),
  availability: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  }),
});

const VenueMood: FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const tempData = {
    'Casual Bar': 5,
    'Lo-fi Vibes': 3,
    'Fine Dining': 1,
    'Rock Concert': 6,
    'Rooftop Bar DJ': 12,
    Clubbing: 15,
    'Hip Restaurants': 3,
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Venue Mood</Typography>
      <Box className={classes.venueContainer}>
        {Object.entries(tempData).map(([vibe, availability]) => (
          <Button className={classes.vibeContainer} key={vibe + availability}>
            <Box className={classes.vibe}>
              <Box className={classes.square} />
              <Typography className={classes.name}>{vibe}</Typography>
              <Typography className={classes.availability}>
                {availability} artists nearby
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default VenueMood;
