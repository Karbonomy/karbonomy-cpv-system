import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography } from '@mui/material';
// hooks
// import useResponsive from '../hooks/useResponsive';
// components
// sections
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

// const StyledRoot = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//   },
// }));

// const StyledSection = styled('div')(({ theme }) => ({
//   width: '100%',
//   maxWidth: 480,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   boxShadow: theme.customShadows.card,
//   backgroundColor: theme.palette.background.default,
// }));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup', { replace: true });
  };

  return (
    <>
      <Helmet>
        <title> Login | Karbonomy </title>
      </Helmet>

      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            Sign in to Karbonomy
          </Typography>

          <Typography variant="body2" sx={{ mb: 5 }}>
            Don’t have an account? {''}
            <Link variant="subtitle2" onClick={handleClick}>Get started</Link>
          </Typography>

          <LoginForm />
        </StyledContent>
      </Container>
    </>
  );
}
