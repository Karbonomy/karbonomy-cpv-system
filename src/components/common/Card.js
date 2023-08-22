import React from 'react';
// mui
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';

export default function NFTCard({ imgSrc, title }) {
  return (
    <Card>
      <CardMedia image={imgSrc} />
      <CardContent>
        <Typography gutterBottom variant='h5' component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardActions>
    </Card>
  )
}