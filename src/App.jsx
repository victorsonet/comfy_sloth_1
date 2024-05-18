import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <main>
      <Navbar isToggle={isToggle} setIsToggle={setIsToggle} />
      {isToggle && <Sidebar />}
      <Outlet />
      <h2>Footer</h2>
    </main>
  );
}

export default App;
