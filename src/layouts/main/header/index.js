import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material';
// navigate
import { useNavigate } from 'react-router';
// icon
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import Searchbar from './Searchbar';
import Loading from '../../../components/common/Loading';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const [haveMetamask, setHaveMetamask] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [accountAddress, setAccountAddress] = useState('')

  const [isLooading, setIsLoading] = useState(false)
  const [loadingContent, setLoadingContent] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    const { ethereum } = window
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        setHaveMetamask(false)
      }
      setHaveMetamask(true)

    }
    checkMetamaskAvailability();

  }, [])

  const connectWallet = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        setHaveMetamask(false)
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
      setIsConnected(true)
      setAccountAddress(accounts[0])
    } catch (error) {
      setIsConnected(false)
    }

  }

  const handleConnectWallet = () => {
    /*
      * TODO: check if wallet address exist in database or not
      * if not exist navigate to signup page
      * if exist get company data (name, email, ...) and connect wallet
    */
    setIsLoading(true)
    setLoadingContent('Checking wallet...')
    navigate('/signup')
    connectWallet()
    setIsLoading(false)
  }

  return (
    <StyledRoot>
      <Loading open={isLooading} content={loadingContent} />
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover /> */}
          {
            isConnected && haveMetamask ?
              (
                <Button variant='contained' startIcon={<AccountBalanceWalletIcon />}>
                  {accountAddress.slice(0, 4)}...{accountAddress.slice(38, 42)}
                </Button>
              ) : (
                <Button
                  variant='contained'
                  startIcon={<AccountBalanceWalletIcon />}
                  onClick={handleConnectWallet}
                >
                  Connect Wallet
                </Button>
              )
          }

        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
