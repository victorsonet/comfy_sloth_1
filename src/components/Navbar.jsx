import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { IoCart, IoPersonAddSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";

function Navbar() {
  return (
    <Wrapper>
      <div className="nav-container">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="nav_links">
          <ul>
            {links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
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

  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }

  .nav_links {
    display: none;
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

  @media screen and (min-width: 768px) {
    .nav-toggle {
      display: none;
    }

    .nav_links {
      display: flex;
      gap: 3rem;
    }
  }
`;

export default Navbar;
