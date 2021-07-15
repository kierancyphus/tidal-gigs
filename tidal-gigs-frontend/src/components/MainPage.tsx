import { FC, useState } from 'react'
import SidebarContainer from './SidebarContainer'
import SearchBar from './SearchBar'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'

import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createTheme'

import Background from '../assets/booker_background.png'
import Typography from '@material-ui/core/Typography'

const MainPageSidebar: FC = () => (
  <SidebarContainer>
    <MainPage />
  </SidebarContainer>
)

const useStyles = makeStyles({
  background: (theme: Theme) => ({
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100%',
    padding: theme.spacing(4),
  }),
  backgroundSearched: (theme: Theme) => ({
    background: '#1D1D1E',
    width: '100%',
    height: '100%',
    padding: theme.spacing(4),
    // transition: 'background 1.5s linear',
  }),
  nav: (theme: Theme) => ({
    background: theme.palette.grey[800],
    // opacity: 0.5,
    color: theme.palette.grey[200],
    marginRight: theme.spacing(3),
  }),
  icon: (theme: Theme) => ({
    width: theme.spacing(4),
    height: theme.spacing(4),
  }),
  spacer: (theme: Theme) => ({
    marginBottom: theme.spacing(6),
  }),
  title: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    // marginBottom: theme.spacing(2.5),
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px',
  }),
  subtitle: (theme: Theme) => ({
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    // marginBottom: theme.spacing(2.5),
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  }),
})

const MainPage: FC = () => {
  const theme = useTheme()
  const classes = useStyles(theme)

  const [location, setLocation] = useState<string>('Location')
  const [genre, setGenre] = useState<string>('Genre')
  const [type, setType] = useState<string>('Group')
  const [searchQuery, setSearchQuery] = useState<string>(
    'Search for a local artist...',
  )

  const handleSubmit = () => {
    console.log(location, genre, type, searchQuery)
    setSearch(true)
    // need to submit here
  }

  const [search, setSearch] = useState<boolean>(false)

  return (
    <Box className={search ? classes.backgroundSearched : classes.background}>
      <Box className={classes.spacer}>
        <Fab className={classes.nav}>
          <NavigateBeforeIcon className={classes.icon} />
        </Fab>
        <Fab className={classes.nav}>
          <NavigateNextIcon className={classes.icon} />
        </Fab>
      </Box>
      {!search && (
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
      <Button onClick={() => setSearch(!search)}>Search</Button>
      Main page here
    </Box>
  )
}

export default MainPageSidebar
