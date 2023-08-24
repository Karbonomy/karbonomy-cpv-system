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

export default function NFTCard({ imageUrl, name, id, carbonAmount, usdtPrice, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/marketplace/detail?id=${id}`} style={{ textDecoration: 'none' }} onClick={onClick}>
      <Card
        raised
        elevation={isHovered ? 8 : 1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardMedia
          component="img"
          height="300"
          image={imageUrl}
          alt={name}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography gutterBottom variant='h4' component="div">
                {name} <br /> #{id}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ minWidth: '150px' }}>
                  Carbon Amount:
                </Typography>
                <Typography variant="h5">
                  {carbonAmount}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ minWidth: '150px' }}>
                  USDT Price:
                </Typography>
                <Typography variant="h5">
                  {usdtPrice}
                </Typography>
              </Box>
            </Box>
            <Button
              startIcon={<LocalGroceryStoreOutlinedIcon />}
              size="large"
              variant="contained"
              color="primary"
              sx={{ width: '30%', alignSelf: 'flex-end' }}
            >
              Detail
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
