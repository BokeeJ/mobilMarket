import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { Outlet } from "react-router";
import axios from "axios";
function App() {

  axios.defaults.baseURL = 'https://dummyjson.com';

  return (
    <div className="bg-[#f6ebdd]">
      <Navbar />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
