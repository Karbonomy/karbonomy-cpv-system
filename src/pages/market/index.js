import React from "react";
import { Helmet } from 'react-helmet-async';
// mui
import { Container, Grid } from "@mui/material";
// components
import NFTCard from "../../components/common/Card";
import Empty from "../../assets/images/empty.jpeg";

function Marketplace() {
  return (
    <>
      <Helmet>
        <title>Marketplace</title>
      </Helmet>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <NFTCard title="Weekly Sales" imgSrc={Empty} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NFTCard title="Weekly Sales" imgSrc={Empty} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NFTCard title="Weekly Sales" imgSrc={Empty} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NFTCard title="Weekly Sales" imgSrc={Empty} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NFTCard title="Weekly Sales" imgSrc={Empty} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NFTCard title="Weekly Sales" imgSrc={Empty} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NFTCard title="Weekly Sales" imgSrc={Empty} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Marketplace;