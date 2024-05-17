import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { IoCart, IoPersonAddSharp } from "react-icons/io5";

function Navbar() {
  return (
    <Wrapper>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav_links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="nav_icons">
          <Link to="#" className="nav_icons_link">
            Cart{" "}
            <IoCart className="nav_icons_icon" style={{ fontSize: "1.5rem" }} />
          </Link>
          <Link to="#" className="nav_icons_link">
            Login{" "}
            <IoPersonAddSharp
              className="nav_icons_icon"
              style={{ fontSize: "1.3rem" }}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-container {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    height: 2rem;
  }

  .nav_links {
    display: flex;
    gap: 3rem;
  }

  .nav_icons {
    display: flex;
    gap: 2rem;

    .nav_icons_link {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      gap: 0.3rem;
    }

    .nav_icons_icon {
    }
  }
`;

export default Navbar;
