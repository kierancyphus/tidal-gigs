import React, { useRef, FC } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createTheme';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import NearMeIcon from '@material-ui/icons/NearMe';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  searchInside: (theme: Theme) => ({
    backgroundColor: theme.palette.grey[800],
    borderRadius: `${theme.spacing(1)}px 0 0 ${theme.spacing(1)}px`,
    marginRight: 0,
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    width: '100%',
    paddingLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  }),
  search: (theme: Theme) => ({
    backgroundColor: theme.palette.grey[800],
    borderRadius: `${theme.spacing(1)}px 0 0 ${theme.spacing(1)}px`,
    marginRight: 0,
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    width: theme.spacing(60),
    display: 'flex',
  }),
  searchText: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    width: '100%',
  }),
  button: (theme: Theme) => ({
    backgroundColor: theme.palette.grey[800],
    borderRadius: 0,
    marginRight: 0,
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'left',
    width: theme.spacing(40),
  }),
  buttonSmall: (theme: Theme) => ({
    backgroundColor: theme.palette.grey[800],
    borderRadius: 0,
    marginRight: 0,
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'left',
    width: theme.spacing(20),
  }),
  buttonRight: (theme: Theme) => ({
    backgroundColor: theme.palette.grey[800],
    borderRadius: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
    marginRight: 0,
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'left',
    width: theme.spacing(20),
  }),
  buttonSubmit: (theme: Theme) => ({
    backgroundColor: theme.palette.grey[800],
    borderRadius: theme.spacing(1),
    marginLeft: theme.spacing(4),
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none',
  }),

  dropdown: (theme: Theme) => ({
    backgroundColor: theme.palette.grey[800],
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(2),
    zIndex: 100,
  }),
  paper: (theme: Theme) => ({
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.grey[800],
  }),
  icon: (theme: Theme) => ({
    marginRight: theme.spacing(2),
  }),
  text: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
  }),
});

const locationOptions: string[] = [
  'Toronto, Ontario',
  'Honolulu, Hawawii',
  'New York City, New York',
  'Atlanta, Georgia',
  'Houston, Texas',
];
const genreOptions: string[] = ['R&B', 'Hip Hop', 'Country', 'Metal', 'Indie'];
const typeOptions: string[] = ['Band', 'Solo'];
interface SearchBarProps {
  location: string;
  genre: string;
  type: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

// idk why it doesn't like the interface :()
const SearchBar: FC<SearchBarProps> = ({
  setLocation,
  setGenre,
  setType,
  setSearch,
  handleSubmit,
  location,
  genre,
  type,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const anchorRefLocation = useRef<HTMLButtonElement>(null);
  const [openLocation, setOpenLocation] = useState<boolean>(false);

  const anchorRefGenre = useRef<HTMLButtonElement>(null);
  const [openGenre, setOpenGenre] = useState<boolean>(false);

  const anchorRefType = useRef<HTMLButtonElement>(null);
  const [openType, setOpenType] = useState<boolean>(false);

  const [locations, setLocations] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    // TODO: update this to make api calls

    setLocations(locationOptions);
    setGenres(genreOptions);
  }, []);

  const handleToggleLocation = () => {
    setOpenLocation(prevOpen => !prevOpen);
  };

  const handleToggleGenre = () => {
    setOpenGenre(prevOpen => !prevOpen);
  };

  const handleToggleType = () => {
    setOpenType(prevOpen => !prevOpen);
  };

  const handleCloseLocation = (
    event: React.MouseEvent<EventTarget>,
    content: string,
  ) => {
    setLocation(content);
    setOpenLocation(false);
  };

  const handleCloseGenre = (
    event: React.MouseEvent<EventTarget>,
    content: string,
  ) => {
    setGenre(content);
    setOpenLocation(false);
  };

  const handleCloseType = (
    event: React.MouseEvent<EventTarget>,
    content: string,
  ) => {
    setType(content);
    setOpenLocation(false);
  };

  return (
    <div className={classes.root}>
      <form className={classes.search} noValidate autoComplete="off">
        <Paper className={classes.searchInside}>
          <SearchIcon className={classes.icon} />
          <InputBase
            placeholder="Search for a local artist..."
            inputProps={{ 'aria-label': 'search' }}
            onChange={event => setSearch(event.currentTarget.value)}
            className={classes.searchText}
          />
        </Paper>
      </form>

      <Button
        variant="contained"
        ref={anchorRefLocation}
        aria-controls={openLocation ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggleLocation}
        className={classes.button}
      >
        <NearMeIcon className={classes.icon} />
        {location}
      </Button>
      <Button
        variant="contained"
        ref={anchorRefGenre}
        aria-controls={openGenre ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggleGenre}
        className={classes.buttonSmall}
      >
        <MusicNoteIcon className={classes.icon} />
        {genre}
      </Button>
      <Button
        variant="contained"
        ref={anchorRefType}
        aria-controls={openType ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggleType}
        className={classes.buttonRight}
      >
        <PersonIcon className={classes.icon} />
        {type}
      </Button>

      <Button
        variant="contained"
        className={classes.buttonSubmit}
        onClick={handleSubmit}
      >
        Search Artists
      </Button>

      <Popper
        className={classes.dropdown}
        open={openLocation}
        anchorEl={anchorRefLocation.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={() => handleToggleLocation()}>
                <MenuList autoFocusItem={openLocation} id="menu-list-grow">
                  {locations.map(opt => (
                    <MenuItem
                      onClick={event => handleCloseLocation(event, opt)}
                      key={opt}
                      className={classes.text}
                    >
                      {opt}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Popper
        className={classes.dropdown}
        open={openGenre}
        anchorEl={anchorRefGenre.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={() => handleToggleGenre()}>
                <MenuList autoFocusItem={openGenre} id="menu-list-grow">
                  {genres.map(opt => (
                    <MenuItem
                      onClick={event => handleCloseGenre(event, opt)}
                      key={opt}
                      className={classes.text}
                    >
                      {opt}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Popper
        className={classes.dropdown}
        open={openType}
        anchorEl={anchorRefType.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={() => handleToggleType()}>
                <MenuList autoFocusItem={openType} id="menu-list-grow">
                  {typeOptions.map(opt => (
                    <MenuItem
                      onClick={event => handleCloseType(event, opt)}
                      key={opt}
                      className={classes.text}
                    >
                      {opt}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default SearchBar;
