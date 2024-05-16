import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <h2>Sidebar</h2>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}

export default App;
