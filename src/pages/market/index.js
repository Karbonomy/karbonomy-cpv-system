import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
// mui
import {
  Container,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ListItemIcon,
  Button,
  Popover,
  Typography,
  Divider
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
// components
import NFTCard from "../../components/common/Card";
// mock data
import certificates from "../../_mock/certificate";
// navigate

function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([20, 50]);
  const [sortOrder, setSortOrder] = useState('lowHigh');

  const [anchorEl, setAnchorEl] = useState(null);
  const [tempPriceRange, setTempPriceRange] = useState(priceRange);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClear = () => {
    setTempPriceRange([0, 100]); // Or whatever your default values are
  };

  const handleApply = () => {
    setPriceRange(tempPriceRange);
    handleClose();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Marketplace</title>
      </Helmet>
      <Container maxWidth="100%">
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div style={{ padding: '20px' }}>
            <Typography gutterBottom>
              Price range
            </Typography>
            <Slider
              value={tempPriceRange}
              onChange={(event, newValue) => setTempPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={100} // Adjust this
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0 1rem 0' }}>
              <TextField sx={{ width: '30%' }} value={tempPriceRange[0]} label="Min Price" variant="outlined" size="small" />
              <TextField sx={{ width: '30%' }} value={tempPriceRange[1]} label="Max Price" variant="outlined" size="small" />
            </div>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Button onClick={handleClear} variant="outlined">
                Clear
              </Button>
              <Button onClick={handleApply} variant="contained" color="primary">
                Apply
              </Button>
            </div>
          </div>
        </Popover>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortOrder}
                onChange={handleSortOrderChange}
                startAdornment={
                  <ListItemIcon>
                    <InsertChartOutlinedOutlinedIcon />
                  </ListItemIcon>
                }
                label="Sort By"
              >
                <MenuItem value="lowHigh">Price low - high</MenuItem>
                <MenuItem value="highLow">Price high - low</MenuItem>
                <MenuItem value="aZ">Name A - Z</MenuItem>
                <MenuItem value="zA">Name Z - A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button
              sx={{ width: '100%', height: '100%', justifyContent: 'space-between' }}
              variant="outlined"
              onClick={handleClick}
              startIcon={<AccountBalanceWalletIcon />}
              endIcon={<ExpandMoreTwoToneIcon />}
            >
              {`$${priceRange[0]} - $${priceRange[1]}`}
            </Button>
          </Grid>
          <Grid item xs={7}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search certificate ID"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {
            certificates.map(certificate => (
              <Grid
                item xs={12}
                sm={6}
                md={3}
                key={certificate.id}
              >
                <NFTCard
                  imageUrl={certificate.imageUrl}
                  name={certificate.name}
                  id={certificate.id}
                  carbonPrice={certificate.carbonPrice}
                />
              </Grid>
            ))
          }

        </Grid>
      </Container >
    </>
  )
}

export default Marketplace;