import { FC, useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createTheme';
import Typography from '@material-ui/core/Typography';

import { mockLocalArtistsForHire } from '../mockData/mockArtistsForHire';

export interface Profile {
  url?: string;
  name: string;
  genre: string;
}

const useStyles = makeStyles({
  title: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
  }),
  name: (theme: Theme) => ({
    marginTop: theme.spacing(2),
  }),
  genre: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  }),
  profile: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(5),
  }),
  profileContainer: (theme: Theme) => ({
    display: 'flex',
    marginTop: theme.spacing(2),
    width: theme.spacing(100),
  }),
});

interface LocalArtistsForHireProps {
  data: Profile[];
  title: string;
}

const LocalArtistsForHire: FC<LocalArtistsForHireProps> = ({ data, title }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      <Typography className={classes.title}>{title}</Typography>
      <Box className={classes.profileContainer}>
        {data.map(({ url, name, genre }) => (
          <Box key={url + name + genre} className={classes.profile}>
            <img src={url} />
            <Box mt={2}>
              <Typography variant="subtitle1">{name}</Typography>
            </Box>
            <Typography variant="subtitle2">{genre}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LocalArtistsForHire;
