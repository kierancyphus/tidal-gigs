import { FC, useState } from 'react';
import SidebarContainer from './SidebarContainer';
import SearchBar from './SearchBar';
import LocalArtistsForHire, { Profile } from './LocalArtistsForHire';
import VenueMood from './VenueMood';
import BookModal from './BookModal';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createTheme';

import Background from '../assets/booker_background.png';
import Typography from '@material-ui/core/Typography';
import SearchResults from './SearchResults';
import { ExtendedProfile } from './SearchResultsRow';
import {
  mockHiredArtists,
  mockLocalArtistsForHire,
  mockSearchResults,
} from '../mockData/mockArtistsForHire';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect } from 'react';

const MainPageSidebar: FC = () => (
  <SidebarContainer>
    <MainPage />
  </SidebarContainer>
);

const useStyles = makeStyles({
  background: (theme: Theme) => ({
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100%',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(4),
  }),
  backgroundSearched: (theme: Theme) => ({
    background: '#1D1D1E',
    width: '100%',
    height: '100%',
    padding: theme.spacing(4),
  }),
  nav: (theme: Theme) => ({
    background: theme.palette.grey[800],
    color: theme.palette.grey[200],
    marginRight: theme.spacing(3),
  }),
  icon: (theme: Theme) => ({
    width: theme.spacing(4),
    height: theme.spacing(4),
  }),
  spacer: (theme: Theme) => ({
    marginBottom: theme.spacing(5),
  }),
  title: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '24px',
  }),
  subtitle: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  }),
  exploreContainer: (theme: Theme) => ({
    marginLeft: '-2.2%', // this is absolutely disgusting but oh well
    background: theme.palette.grey[900],
    width: '104.5%',
    height: '100%',
  }),
  backdrop: (theme: Theme) => ({
    zIndex: theme.zIndex.drawer - 1,
    color: '#fff',
    paddingLeft: theme.spacing(40),
  }),
  hired: (theme: Theme) => ({
    padding: theme.spacing(4, 4, 0, 5),
  }),
});

enum SearchStatus {
  NOT_SEARCHED,
  SEARCHING,
  COMPLETED,
}

enum Page {
  EXPLORE,
  SEARCH,
}

export interface HiredProfile extends Profile {
  time: string;
  amount: number;
}

const MainPage: FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  // things that should actually be in a form
  const [location, setLocation] = useState<string>('Location');
  const [genre, setGenre] = useState<string>('Genre');
  const [type, setType] = useState<string>('Group');
  const [searchQuery, setSearchQuery] = useState<string>(
    'Search for a local artist...',
  );

  // things that handle pages and searching
  const [page, setPage] = useState<Page>(Page.EXPLORE);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [searchStatus, setSearchStatus] = useState<SearchStatus>(
    SearchStatus.NOT_SEARCHED,
  );
  const [searchResults, setSearchResults] = useState<ExtendedProfile[]>([]);
  const [selected, setSelected] = useState<Profile>({
    name: '',
    url: '',
    genre: '',
  });

  const [hired, setHired] = useState<HiredProfile[]>([]);
  const [localArtistsForHire, setLocalArtistsForHire] = useState<Profile[]>(
    mockLocalArtistsForHire,
  );

  useEffect(() => {
    // setHired(mockHiredArtists);
    // TODO: get hired people
  }, []);

  const handleSubmit = () => {
    setSearchResults([]);
    setPage(Page.SEARCH);

    // mock searching
    setSearchStatus(SearchStatus.SEARCHING);

    // TODO: replace
    setTimeout(() => {
      setSearchStatus(SearchStatus.COMPLETED);
      setSearchResults(mockSearchResults);
    }, 2000);
  };

  const handleSelection = (name: string, url: string, genre: string) => {
    setOpenModal(true);
    setSelected({ name, url, genre });
  };

  const handleConfirmation = (time: string, amount: number) => {
    setOpenModal(false);
    setPage(Page.EXPLORE);

    // send request
    console.log(hired);
    setHired([...hired, { ...selected, time, amount }]);
  };

  return (
    <Box
      className={
        page == Page.SEARCH ? classes.backgroundSearched : classes.background
      }
    >
      <Box className={classes.spacer}>
        <Fab className={classes.nav} onClick={() => setPage(Page.EXPLORE)}>
          <NavigateBeforeIcon className={classes.icon} />
        </Fab>
        <Fab
          className={classes.nav}
          onClick={() => setPage(Page.SEARCH)}
          disabled={searchStatus === SearchStatus.NOT_SEARCHED}
        >
          <NavigateNextIcon className={classes.icon} />
        </Fab>
      </Box>
      {page == Page.EXPLORE && (
        <Box className={classes.spacer}>
          <Typography className={classes.title} gutterBottom>
            Welcome to Tidal Surfing
          </Typography>
          <Typography className={classes.subtitle}>
            Quickly search and book local artists on Tidal for your next gig
          </Typography>
        </Box>
      )}
      <Box className={classes.spacer}>
        <SearchBar
          location={location}
          genre={genre}
          type={type}
          setLocation={setLocation}
          setGenre={setGenre}
          setType={setType}
          setSearch={setSearchQuery}
          handleSubmit={handleSubmit}
        />
      </Box>

      {page == Page.EXPLORE && (
        <>
          <Box className={classes.spacer}>
            <LocalArtistsForHire
              data={localArtistsForHire}
              title="Local Artists for Hire"
            />
          </Box>
          <Box className={classes.exploreContainer}>
            {hired.length > 0 && (
              <Box className={classes.hired}>
                <LocalArtistsForHire data={hired} title="Hired Artists" />
              </Box>
            )}
            <VenueMood />
          </Box>
        </>
      )}

      <Backdrop
        open={searchStatus === SearchStatus.SEARCHING}
        className={classes.backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {page != Page.EXPLORE && (
        <>
          <SearchResults profiles={searchResults} onClick={handleSelection} />
          <BookModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            handleSubmit={handleConfirmation}
            {...selected}
          />
        </>
      )}
    </Box>
  );
};

export default MainPageSidebar;
