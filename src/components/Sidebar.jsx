import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { IoCart, IoPersonAddSharp } from "react-icons/io5";
import styled from "styled-components";

function Sidebar() {
  return (
    <Wrapper>
      <div className="sidebar_center">
        <div className="overlay">
          <div className="nav_links">
            {links.map(({ id, text, url }) => {
              return (
                <Link to={url} key={id} className="nav_link">
                  {text}
                </Link>
              );
            })}
          </div>
          <div className="nav_buttons">
            <Link to="#" className="nav_button">
              Cart <IoCart />
            </Link>
            <Link to="#" className="nav_button">
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
  }
`;

export default Sidebar;
