import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import { mockTimes } from '../mockData/mockArtistsForHire';
import EventIcon from '@material-ui/icons/Event';
import { Profile } from './LocalArtistsForHire';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: -theme.spacing(30),
    marginTop: -theme.spacing(25),
    width: theme.spacing(60),
    height: theme.spacing(50),
    position: 'absolute',
    top: '50%',
    left: '60%',

    backgroundColor: theme.palette.grey[800],
    borderRadius: theme.spacing(2),
    // border: '1px solid white',
    padding: theme.spacing(4),
  },
  modal: {
    zIndex: theme.zIndex.drawer - 1,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.grey[700],
  },
  text: {
    margin: theme.spacing(0, 2, 0, 2),
    textAlign: 'center',
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
  },
  lineBreak: {
    border: `1px solid ${theme.palette.grey[700]}`,
    margin: theme.spacing(2, 1, 2, 1),
  },
  searchInside: {
    backgroundColor: theme.palette.grey[700],
    borderRadius: theme.spacing(1),
    marginRight: 0,
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    width: '100%',
    paddingLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  searchText: {
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    width: '100%',
  },
  button: {
    backgroundColor: theme.palette.grey[700],
    borderRadius: theme.spacing(1),
    height: theme.spacing(4),
    fontFamily: 'Nationale',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'left',
  },
  paper: {
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.grey[700],
    width: theme.spacing(48),
  },
  dropdown: {
    backgroundColor: theme.palette.grey[700],
    marginTop: theme.spacing(2),
    borderRadius: theme.spacing(2),
    zIndex: 100,
  },
}));

interface BookModalProps extends Profile {
  open: boolean;
  onClose: () => void;
  handleSubmit: (time: string, amount: number) => void;
  // onSelect: () => void;
}

const BookModal: FC<BookModalProps> = ({
  open,
  name,
  url,
  genre,
  onClose,
  handleSubmit,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const anchorRef = React.useRef(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [time, setTime] = useState<string>('');
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>();

  useEffect(() => {
    setAvailableTimes(mockTimes);
  }, []);

  const handleClick = (time: string) => {
    setOpenDropdown(false);
    setTime(time);
  };

  // const handleSubmit = () => {
  //   console.log(time, amount);
  //   onClose();
  // };

  return (
    <Modal open={open} className={classes.modal} onClose={onClose}>
      <Box className={classes.root}>
        <Box mb={2}>
          <Typography variant="subtitle1">Send Booking Request</Typography>
        </Box>

        <Typography variant="subtitle2">Booking with</Typography>
        <Box className={classes.container}>
          {url ? (
            <Avatar className={classes.avatar} src={url} />
          ) : (
            <Avatar className={classes.avatar}>AB</Avatar>
          )}
          <Typography variant="subtitle1" className={classes.text}>
            {name}
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            {genre}
          </Typography>
        </Box>

        <Box className={classes.lineBreak} />

        <Box mb={2}>
          <Typography variant="subtitle2">Amount</Typography>
          <form noValidate autoComplete="off">
            <Paper className={classes.searchInside}>
              <InputBase
                inputProps={{ 'aria-label': 'paymentAmount' }}
                onChange={event =>
                  setAmount(parseFloat(event.currentTarget.value))
                }
                className={classes.searchText}
                startAdornment={
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                }
              />
            </Paper>
          </form>
        </Box>

        <Typography variant="subtitle2">Date</Typography>

        <Button
          variant="contained"
          ref={anchorRef}
          aria-controls={openDropdown ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={() => setOpenDropdown(true)}
          className={classes.button}
          placeholder="Select a time"
          fullWidth
        >
          <InputAdornment position="start">
            <EventIcon />
          </InputAdornment>
          {time}
        </Button>

        <Popper
          className={classes.dropdown}
          open={openDropdown}
          anchorEl={anchorRef.current}
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
                <ClickAwayListener onClickAway={() => setOpenDropdown(false)}>
                  <MenuList autoFocusItem={openDropdown} id="menu-list-grow">
                    {availableTimes.map(opt => (
                      <MenuItem
                        onClick={() => handleClick(opt)}
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

        <Box className={classes.lineBreak} />

        <Box mt={2}>
          <Button
            className={classes.button}
            fullWidth
            style={{ justifyContent: 'center' }} // hacky lmao but then again it is hack week
            onClick={() => handleSubmit(time, amount || 10)}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BookModal;
