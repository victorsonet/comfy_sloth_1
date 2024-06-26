import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { IoCart, IoPersonAddSharp } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";

function Navbar({ isToggle, setIsToggle }) {
  return (
    <Wrapper>
      <div className="nav_container">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={() => setIsToggle(false)}
          />
        </Link>
        <button className="nav_toggle">
          {isToggle ? (
            <FaTimes
              onClick={() => setIsToggle((prev) => !prev)}
              style={{ color: "var(--clr-red-dark)" }}
            />
          ) : (
            <FaBars onClick={() => setIsToggle((prev) => !prev)} />
          )}
        </button>
        <div className="nav_links">
          {links.map(({ id, text, url }) => {
            return (
              <Link
                key={id}
                to={url}
                className="nav_link"
                onClick={() => setIsToggle((prev) => !prev)}
              >
                {text}
              </Link>
            );
          })}
        </div>
        <div className="nav_buttons">
          <Link
            to="#"
            className="nav_button"
            onClick={() => setIsToggle((prev) => !prev)}
          >
            Cart <IoCart /> <span className="cart_value">6</span>
          </Link>
          <Link
            to="#"
            className="nav_button"
            onClick={() => setIsToggle((prev) => !prev)}
          >
            Login <IoPersonAddSharp />
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

  .nav_container {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    height: 2rem;
  }

  .nav_toggle {
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

  .nav_buttons {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .nav_toggle {
      display: none;
    }

    .nav_links {
      display: flex;
      gap: 1.5rem;
      font-size: 1rem;
      text-transform: capitalize;
    }

    .nav_link {
      color: var(--clr-grey-1);
      font-weight: 500;
    }

    .nav_buttons {
      display: flex;
      justify-content: center;
      gap: 2rem;
      font-size: 1.2rem;
    }

    .nav_button {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      color: var(--clr-grey-1);
      font-weight: 500;
    }

    .cart_value {
      position: absolute;
      top: -10px;
      right: -16px;
      background-color: var(--clr-primary-5);
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      color: var(--clr-white);
      padding: 10px;
    }
  }
`;

export default Navbar;
