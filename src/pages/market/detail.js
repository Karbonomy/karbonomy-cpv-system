import React from "react";
import { Helmet } from 'react-helmet-async';
// mui
import {
  Button,
  Typography,
  Avatar,
  Container,
  Grid,
  Box,
  Card,
  CardMedia,
  LinearProgress
} from '@mui/material';
// store
import { useSelector } from "react-redux";
// utils
import {
  fToNow,
  fDate
} from "../../utils/formatTime";
// components
import CountDownTimer from "../../components/common/CountDownTimer";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100px', mr: 1 }}>
        <LinearProgress color="primary" variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CertificateDetail() {
  const {
    id,
    name,
    imageUrl,
    carbonAmount,
    usdtPrice,
    createdAt,
    origin,
    avatar,
    startDate,
    endDate,
    address,
    progress
  } = useSelector((state) => state.certificate)

  return (
    <>
      <Helmet>
        <title>{name} #{id}</title>
      </Helmet>

      <Container maxWidth="100%">
        <Grid container spacing={2} justifyContent={"space-evenly"}>
          <Grid item xs={6}>
            <Card raised>
              <CardMedia
                component="img"
                height="600"
                image={imageUrl}
                alt={name}
              />
            </Card>
          </Grid>

          <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box mb={3}>
              <Typography variant="h2" gutterBottom>
                {name} #{id}
              </Typography>

              <Box display="flex" alignItems="center" mt={2}>
                <Avatar alt={name} src={avatar} style={{ marginRight: '16px' }} />

                <Box>
                  <Typography variant="subtitle2">Creator</Typography>
                  <Typography variant="body1">
                    {origin} created at {fDate(createdAt)} {fToNow(startDate)}
                  </Typography>
                </Box>
              </Box>

              <Card sx={{ display: 'flex', alignItems: 'center', padding: '12px', marginTop: '2rem' }}>
                <Box
                  style={{
                    flex: 1,
                    paddingRight: '16px',
                    borderRight: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography variant="h6" component="span" style={{ marginBottom: '8px' }}>
                    Estimated End Date: {fDate(endDate)}
                  </Typography>

                  <CountDownTimer startDate={startDate} endDate={endDate} />

                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: '2rem'
                    }}
                  >
                    <Typography variant="h6" style={{ marginRight: '16px' }}>
                      Working Progress
                    </Typography>
                    <LinearProgressWithLabel value={progress} />
                  </Box>

                </Box>

                <Box
                  style={{
                    flex: 1,
                    paddingLeft: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="h4" component="span" style={{ display: 'block', marginBottom: '8px' }}>
                    Carbon Amount:
                  </Typography>
                  <Typography component="span" style={{ display: 'block', fontSize: '1.4rem' }}>
                    {carbonAmount} CARBON
                  </Typography>
                </Box>
              </Card>


            </Box>

            <Box>
              <Typography variant="h5">Description</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography variant="h5" component="span" style={{ display: 'inline-block', marginRight: '8px' }}>
                Address:
              </Typography>
              <Typography component="span" style={{ display: 'inline-block', fontSize: '1.4rem' }}>
                {address}
              </Typography>
            </Box>


            <Box mt={3}>
              <Box style={{ width: '100%', fontSize: '2rem', borderBottom: '1px solid gray', paddingBottom: '8px', marginBottom: '16px' }}>
                <Typography style={{ fontSize: '1.8rem', marginBottom: '8px', display: 'block', fontWeight: 'bold' }}>Current Price</Typography>

                <Typography variant="h3" component="span" style={{ color: 'rgb(34 162 237)', display: 'block', marginBottom: '8px' }}>
                  {usdtPrice} USDT
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px', borderRadius: '20px', width: '100%', height: '60px', fontSize: '2rem' }}
              >
                Buy
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

