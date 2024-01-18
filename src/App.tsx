import { Outlet, useNavigate, Link } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import "boxicons";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  if (pathname == "/") {
    setTimeout(() => {
      return navigate("/about");
    }, 0);
  }

  return (
    <div className="main bg-white">
      <Header />
      <hr className="line-break" />
      <ul className="flex flex-row gap-4 pt-4 pl-8 font-light">
        <li className="text-orange">
          <Link to={"#"}>About</Link>
        </li>
        <li>
          <Link to={"#"}>Jobs</Link>
        </li>
        <li>
          <Link to={"#"}>Apprenticeships</Link>
        </li>
      </ul>
      <Outlet />
      <hr className="line-break" />
      <Footer />
    </div>
  );
}

export default App;
