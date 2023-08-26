import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import NFTCard from "../../components/common/Card";
// mock data
// import certificates from "../../_mock/certificate";


// store
import { useDispatch } from "react-redux";
import { setCertificate, clearCertificate } from "../../features/certificateSlice";
//css 
import '../../assets/css/market.css';

import axios from "axios";

const baseURL = "http://localhost:3333/projectNfts/";

function Marketplace() {
  const [message, setMessage] = useState(useLocation()?.state?.message ?? '')
  const notify = () => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setMessage('');

  }
  useEffect(() => {
    if (message !== '') {
      notify();

    }

  });
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([20, 50]);
  const [sortOrder, setSortOrder] = useState('lowHigh');

  const [anchorEl, setAnchorEl] = useState(null);
  const [tempPriceRange, setTempPriceRange] = useState(priceRange);

  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setData(res.data);
    })
  }, []);

  const dispatch = useDispatch();

  const handleCardClick = (certificate) => {
    dispatch(clearCertificate())

    dispatch(setCertificate(certificate))
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClear = () => {
    setTempPriceRange([0, 100]);
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
      <ToastContainer limit={1} />
      <h1 className="page-header">Marketplace</h1>
      <Container className="container">

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
                className="btn-custom"
                value={sortOrder}
                onChange={handleSortOrderChange}
                startAdornment={
                  <ListItemIcon >
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
            datas.map(certificate => (
              <Grid
                item xs={12}
                sm={6}
                md={4}
                className="card-nft"
                key={certificate.id}
              >
                <div className="card">
                  <NFTCard
                    imageUrl={certificate.image}
                    name={certificate.name}
                    id={certificate.id}
                    carbonAmount={certificate.amount}
                    usdtPrice={certificate.price}
                    onClick={() => handleCardClick(certificate)}
                  />
                  <div className="back-card"></div>
                  <div className="thid-card"></div>
                </div>
              </Grid>
            ))
          }

        </Grid>
      </Container >
    </>
  )
}

export default Marketplace;