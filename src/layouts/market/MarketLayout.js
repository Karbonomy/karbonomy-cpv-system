import React from "react";
import { Outlet } from "react-router";
// components
import Header from "./header";
// mui
import { Box } from "@mui/material";
import Footer from "./footer.js";

export default function MarketLayout() {
  return (
    <div className="body-market">
      <Header />
      <Box sx={{ margin: '3rem 0 2rem 0' }} />
      <Outlet />
      <Footer />
    </div>
  )
}