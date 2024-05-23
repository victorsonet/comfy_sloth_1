import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { IoCart, IoPersonAddSharp } from "react-icons/io5";
import styled from "styled-components";

function Sidebar({ setIsToggle }) {
  return (
    <Wrapper>
      <div className="sidebar_center">
        <div className="overlay">
          <div className="nav_links">
            {links.map(({ id, text, url }) => {
              return (
                <Link
                  to={url}
                  key={id}
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
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  transform: 1s;
  transition: 2s;

  .sidebar_center {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }

  .nav_links {
    display: flex;
    flex-direction: column;
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
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: var(--clr-grey-1);
    font-weight: 500;
    position: relative;
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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
