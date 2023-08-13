import React from "react";
import { Button } from "semantic-ui-react";
import "./index.css"

export default function Header() {
  return (
    <div className="container">
      <div className="container-left">
        <div className="container-left__logo">LOGO</div>
      </div>
      <div className="container-right">
        <div className="container-right__signup">
          <Button className="container-right__signup--button">Sign Up</Button>
        </div>
      </div>
    </div>
  )
}