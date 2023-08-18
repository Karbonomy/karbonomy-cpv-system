import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography } from '@mui/material';

// sections
import { SignupForm } from '../sections/auth/signup'

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Signup | Karbonomy</title>
      </Helmet>

      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            Sign up to Karbonomy
          </Typography>

          <Typography variant="body2" sx={{ mb: 5 }}>
            Don’t have an account? {''}
            <Link variant="subtitle2">Get started</Link>
          </Typography>

          <SignupForm />
        </StyledContent>
      </Container>
    </>
  )
}
