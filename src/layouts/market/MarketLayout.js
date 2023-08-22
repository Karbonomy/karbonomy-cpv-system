import React from "react";
import { Outlet } from "react-router";
import Header from "./header";

export default function MarketLayout() {
  return (
    <div>
      <Header />
      <h1>This is market layout</h1>
      <Outlet />
    </div>
  )
}