import React from 'react';
// styles
import { styled, alpha } from '@mui/material/styles';
// mui
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// components
import WalletButton from '../../../components/common/ConnectWalletButton';
// store
import { useSelector } from 'react-redux';
// navigate
import { useNavigate } from 'react-router';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const navigate = useNavigate();

  const { wallet, isConnected } = useSelector((state) => state.user)

  const handleBackToDashboard = () => {
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='header'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: '20rem' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
            className='logo-name'
            onClick={handleBackToDashboard}
          >
            KARBONOMY <span className='logo-right'>&nbsp;NFT</span>
          </Typography>

          <Search className='search-bar' sx={{ flexGrow: '2' }}>
            <SearchIconWrapper>
              <SearchIcon  className='search-icon'/>
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: '100%' }}
              placeholder="Search ...."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <WalletButton wallet={wallet} isConnected={isConnected} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}