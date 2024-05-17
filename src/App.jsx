import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <main>
      <Navbar />
      <h2>Sidebar</h2>
      <Outlet />
      <h2>Footer</h2>
    </main>
  );
}

export default App;
