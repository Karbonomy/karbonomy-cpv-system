import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { web3Enable } from '@polkadot/extension-dapp';
import { useSelector } from 'react-redux';
import { bgBlur } from '../../../utils/cssStyles';
import Iconify from '../../../components/iconify';
import Searchbar from './Searchbar';
import WalletButton from '../../../components/common/ConnectWalletButton';

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

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const { isConnected, wallet } = useSelector((state) => state.user);

  useEffect(() => {
    const checkPolkadotAvailability = async () => {
      return await web3Enable('Your DApp Name');
    };

    checkPolkadotAvailability();
  }, []);

  return (
    <StyledRoot>
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
          <WalletButton wallet={wallet} isConnected={isConnected} />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
