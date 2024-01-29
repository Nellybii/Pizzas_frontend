import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <MDBNavbar style={{ margin: '40px', padding:"5px" }} expand="lg" light bgColor="light" cellPadding={40}>
      <MDBContainer fluid>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink style={{marginRight:"40px"}} href="restaurants">Restaurants</MDBNavbarLink>
            <MDBNavbarLink href="pizzas">Pizzas</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
