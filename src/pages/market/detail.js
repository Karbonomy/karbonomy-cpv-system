import React from "react";
import { Helmet } from 'react-helmet-async';
// mui
import {
  Button,
  Typography,
  Avatar,
  InputLabel,
  Container,
  Grid,
  Box,
  Card,
  CardMedia,
} from '@mui/material';
// store
import { useSelector } from "react-redux";
// utils
import { fToNow } from "../../utils/formatTime";

export default function CertificateDetail() {
  const {
    id,
    name,
    imageUrl,
    carbonAmount,
    usdtPrice,
    createdAt,
    origin,
    avatar
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
              {/* Certificate Name & ID */}
              <Typography variant="h2" gutterBottom>
                {name} #{id}
              </Typography>

              <Box display="flex" alignItems="center" mt={2}>
                {/* Creator's Avatar */}
                <Avatar alt={name} src={avatar} style={{ marginRight: '16px' }} />

                {/* Creator Info */}
                <Box>
                  <Typography variant="subtitle2">Creator</Typography>
                  <Typography variant="body1">
                    {origin} created at {fToNow(createdAt)}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h4">Description</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography variant="h4" component="span" style={{ display: 'inline-block', marginRight: '8px' }}>
                Carbon Amount:
              </Typography>
              <Typography component="span" style={{ display: 'inline-block', fontSize: '1.4rem' }}>
                {carbonAmount} CARBON
              </Typography>
            </Box>


            <Box mt={3}>
              <Box style={{ width: '100%', fontSize: '2rem', borderBottom: '1px solid gray', paddingBottom: '8px', marginBottom: '16px' }}>
                <InputLabel style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'block' }}>Current Price</InputLabel>

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
