import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Bookings from './components/Bookings'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/surf">
            <div>Surfing!!</div>
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

// function App() {
//   // const [artist, setArtist] = useState(null);

//   useEffect(() => {
//     getArtist(10)
//   }, [])

//   return <div>Nothing here</div>
// }

export default App
