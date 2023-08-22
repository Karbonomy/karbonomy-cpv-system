import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material';
// navigate
// import { useNavigate } from 'react-router';
// icon
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// web3
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';
// redux
import { useDispatch } from 'react-redux';
import { setLoggedInUser, clearLoggedInUser } from "../../../features/userSlice"
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import Searchbar from './Searchbar';
// import Loading from '../../../components/common/Loading';
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
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [havePolkadotExtension, setHavePolkadotExtension] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');

  // const [isLoading, setIsLoading] = useState(false);
  // const [loadingContent, setLoadingContent] = useState('');


  useEffect(() => {
    const checkPolkadotAvailability = async () => {
      const extensions = await web3Enable('Your DApp Name');

      if (!extensions.length) {
        setHavePolkadotExtension(false);
        return;
      }
      setHavePolkadotExtension(true);
    }

    checkPolkadotAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      const allAccounts = await web3Accounts();

      if (allAccounts.length) {
        setIsConnected(true);
        setAccountAddress(allAccounts[0].address);
        dispatch(setLoggedInUser({
          name: 'test',
          email: 'test@email.com',
          wallet: allAccounts[0].address
        }))
      }
    } catch (error) {
      setIsConnected(false);
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccountAddress('');
    dispatch(clearLoggedInUser())
  };

  // const handleConnectWallet = () => {
  //   /*
  //     * TODO: check if wallet address exist in database or not
  //     * if not exist navigate to signup page
  //     * if exist get company data (name, email, ...) and connect wallet
  //   */
  //   // setIsLoading(true);
  //   setLoadingContent('Checking wallet...');
  //   connectWallet()
  //     .then(() => {
  //       navigate('/signup');
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  return (
    <StyledRoot>
      {/* <Loading open={isLooading} content={loadingContent} /> */}
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
            isConnected && havePolkadotExtension ?
              (
                <Button
                  variant='contained'
                  startIcon={<AccountBalanceWalletIcon />}
                  onClick={disconnectWallet}
                >
                  {accountAddress.slice(0, 4)}...{accountAddress.slice(-4)}
                </Button>
              ) : (
                <Button
                  variant='contained'
                  startIcon={<AccountBalanceWalletIcon />}
                  onClick={connectWallet}
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
