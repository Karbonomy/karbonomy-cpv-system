import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box
} from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Link } from 'react-router-dom';

export default function NFTCard({ imageUrl, name, id, carbonPrice }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/marketplace/detail?id=${id}`} style={{ textDecoration: 'none' }}>
      <Card
        raised
        elevation={isHovered ? 8 : 1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={name}
        />
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography gutterBottom variant='h4' component="div">
              {name} <br /> #{id}
            </Typography>
            <Typography variant="h5">
              Carbon Price: {carbonPrice}
            </Typography>
          </Box>
          <Button
            startIcon={<LocalGroceryStoreOutlinedIcon />}
            size="large"
            variant="contained"
            color="primary"
            sx={{ width: '30%' }}
          >
            Detail
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
