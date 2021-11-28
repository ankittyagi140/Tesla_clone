import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Translate } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Header() {
  const [menuState, setMenuState] = useState(false);
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src="/images/images/logo.svg" alt="Tesla header" />
        </Link>
      </Logo>
      <Menu>
        <Link to="/models">Model S</Link>
        <Link to="/model3">Model 3</Link>
        <Link to="/modelx">Model X</Link>
        <Link to="/modely">Model Y</Link>
        <Link to="/solarpanel">Solar Panels</Link>
        <Link to="/solarroof">Solar Roof </Link>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <Link to="/login">Account</Link>
        <CustomMenu onClick={() => setMenuState(true)}>
          <a href="#">Menu</a>
        </CustomMenu>
      </RightMenu>
      {menuState ? (
        <MenuItems>
          <CloseWrapper>
            <CustomClose onClick={() => setMenuState(false)} />
          </CloseWrapper>

          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Used-In</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadaster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
        </MenuItems>
      ) : null}
    </Container>
  );
}
export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
`;
const Logo = styled.div`
:hover{
  background-color: transparent !important;
}`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    test-transform: uppercase;
    padding: 0 20px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const CustomMenu = styled.div``;
const MenuItems = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
  li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  :hover {
    background-color: #cccfd4;
  }
`;
