import { FC } from 'react'
import SidebarContainer from './SidebarContainer'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const BookingsPageSidebar = () => (
  <SidebarContainer>
    <BookingsPage />
  </SidebarContainer>
)

const BookingsPage: FC = () => {
  return (
    <Box p={2}>
      <Title />
    </Box>
  )
}

const Title: FC = () => {
  return (
    <Box p={1}>
      <Typography variant="h5" gutterBottom>
        Titles go here
      </Typography>
    </Box>
  )
}
export default BookingsPageSidebar
