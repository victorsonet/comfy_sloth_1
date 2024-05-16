import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { IoCart, IoPersonAddSharp } from "react-icons/io5";

function Navbar() {
  return (
    <Wrapper>
      <div className="section-center">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <div className="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
        </div>
        <div className="icons">
          <a href="/checkout">
            Cart <IoCart />
          </a>
          <a href="">
            Login <IoPersonAddSharp />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90%;
  height: 10vh;

  .section-center {
    min-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    height: 2rem;
  }

  .links {
    display: flex;
    gap: 3rem;
  }

  .icons {
    display: flex;
    gap: 2rem;
  }
`;

export default Navbar;
