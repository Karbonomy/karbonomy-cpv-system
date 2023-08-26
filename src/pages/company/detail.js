import React from "react";
// mui
import {
  Container,
  Grid,
  Card,
  Avatar,
  Box,
  Typography
} from '@mui/material';
// store
import { useSelector } from "react-redux";

function CompanyDetail() {
  const { wallet, carbonAmount } = useSelector((state) => state.user);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
              <Avatar alt="company avatar" src="/assets/images/avatars/avatar_default.jpg" sx={{ width: 80, height: 80, mr: 3 }} />
              <Box>
                <Typography variant="h6">Nestle</Typography>
                <Typography variant="subtitle1" color="textSecondary">Enviroment Company</Typography>
                <Typography variant="body2" color="textSecondary">New York, America</Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" mb={3}>Assets</Typography>
              <Grid container spacing={2} width="70%">
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Carbon</Typography>
                  <Typography sx={{ fontWeight: '600' }}>{carbonAmount}</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">USDT</Typography>
                  <Typography sx={{ fontWeight: '600' }}>1000</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" mb={3}>Company Information</Typography>
              <Grid container spacing={2} width="70%">
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Name</Typography>
                  <Typography sx={{ fontWeight: '600' }}>Nestle</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Email</Typography>
                  <Typography sx={{ fontWeight: '600' }}>nestle@email.com</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Phone</Typography>
                  <Typography sx={{ fontWeight: '600' }}>+09 345 346 46</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Field</Typography>
                  <Typography sx={{ fontWeight: '600' }}>Enviroment</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Wallet Address</Typography>
                  <Typography sx={{ fontWeight: '600' }}>{wallet}</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" mb={3}>Address</Typography>
              <Grid container spacing={2} width="70%">
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Country</Typography>
                  <Typography sx={{ fontWeight: '600' }}>United Kingdom</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">City/State</Typography>
                  <Typography sx={{ fontWeight: '600' }}>Leeds, East London</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Postal Code</Typography>
                  <Typography sx={{ fontWeight: '600' }}>ERT 1245</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="body2" color="textSecondary">Tax ID</Typography>
                  <Typography sx={{ fontWeight: '600' }}>ASIOSCSHJ12</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default CompanyDetail;
