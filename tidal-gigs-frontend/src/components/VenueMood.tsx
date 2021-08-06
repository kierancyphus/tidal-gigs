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
    width: theme.spacing(19),
    height: theme.spacing(19),
    marginBottom: theme.spacing(2),
  }),
  venueContainer: (theme: Theme) => ({
    display: 'flex',
    paddingBottom: theme.spacing(4),
  }),
  vibe: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    textAlign: 'left',
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
  fit: (theme: Theme) => ({
    width: '100%',
    height: '100%',
    // borderRadius: theme.spacing(10),
    objectFit: 'cover',
    opacity: '50%',
    transition: 'opacity 0.1s ease-in-out',
    '&:hover': {
      opacity: '100%',
    },
  }),
});

const VenueMood: FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const tempData = {
    'Casual Bar': {
      availability: 5,
      url: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/5/31/0/FOD16_gindesignsgroup_The-Commoner_5.jpg.rend.hgtvcom.966.644.suffix/1464723768362.jpeg',
    },
    'Lo-fi Vibes': {
      availability: 3,
      url: 'https://64.media.tumblr.com/5cb7f413786ad94f39a099f1996792a1/tumblr_p9c9gnY9i51xtqmc3o1_1280.jpg',
    },
    'Fine Dining': {
      availability: 1,
      url: 'https://dynamicmedia.zuza.com/zz/m/original_/3/c/3c2543b3-0a25-45cd-89c5-e5467c0c2be6/BlueBlood-Steakhouse-e1513709024858_Super_Portrait.jpg',
    },
    'Rock Concert': {
      availability: 6,
      url: 'https://media.istockphoto.com/photos/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-picture-id1189205501?k=6&m=1189205501&s=612x612&w=0&h=CC1maNoB0nNwoZXrJ6hsOUFs0NisaexhX9ZS_wGkU_o=',
    },
    'Rooftop Bar': {
      availability: 12,
      url: 'https://du9bj9c2s4nh.cloudfront.net/wp-content/uploads/2020/05/patio-8-980x618.jpg',
    },
    Clubbing: {
      availability: 15,
      url: 'https://i.pinimg.com/originals/31/78/95/317895e71b1c8e53e9450ab269608c04.jpg',
    },
    'Hip Restaurants': {
      availability: 3,
      url: 'https://cdn.vox-cdn.com/thumbor/ajHnOksuv-AoB8x5Aq25W8M1y_4=/0x0:1170x649/1200x900/filters:focal(492x232:678x418):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63616016/1170-new-01.0.0.jpg',
    },
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Venue Mood</Typography>
      <Box className={classes.venueContainer}>
        {Object.entries(tempData).map(([vibe, { availability, url }]) => (
          <Button className={classes.vibeContainer} key={vibe + availability}>
            <Box className={classes.vibe}>
              <Box className={classes.square}>
                <img src={url} className={classes.fit} />
              </Box>
              {/* <Box className={classes.square} /> */}
              <Typography variant="subtitle1">{vibe}</Typography>
              <Typography variant="subtitle2">
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
