import { useDispatch } from 'react-redux';
import { setLoggedInUser, clearLoggedInUser } from "../../features/userSlice"
import { web3Accounts } from '@polkadot/extension-dapp';
import { Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function WalletButton({ wallet, isConnected }) {
  const dispatch = useDispatch();

  const connectWallet = async () => {
    try {
      const allAccounts = await web3Accounts();
      if (allAccounts.length) {
        dispatch(setLoggedInUser({
          name: 'test',
          email: 'test@email.com',
          wallet: allAccounts[0].address
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWallet = () => {
    dispatch(clearLoggedInUser());
  };

  return (
    isConnected ? (
      <Button
        variant='contained'
        startIcon={<AccountBalanceWalletIcon />}
        onClick={disconnectWallet}
      >
        {wallet.slice(0, 4)}...{wallet.slice(-4)}
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
  );
}
