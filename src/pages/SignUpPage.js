import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login', { replace: true })
  }

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
            Already have an account? {''}
            <Link variant="subtitle2" onClick={handleClick}>Login here</Link>
          </Typography>

          <SignupForm />
        </StyledContent>
      </Container>
    </>
  )
}
