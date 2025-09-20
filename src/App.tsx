import { useMemo } from "react";
import { useLocation, Outlet } from "react-router-dom";
import "./App.css";
import "./components/css/crew.css";
import "./components/css/destination.css";
import "./components/css/technology.css";
import MainMenu from "./components/navbar/MainMenu";

function App() {
  const location = useLocation();
  const selectedBackground = useMemo(() => {
    let classname;

    if (location.pathname === "/" || location.pathname === "/") {
      classname = "first-page";
    } else if (location.pathname === "/destination") {
      classname = "first-page-destination";
    } else if (location.pathname === "/crew") {
      classname = "first-page-crew";
    } else if (location.pathname === "/technology") {
      classname = "first-page-technology";
    }
    return classname;
  }, [location.pathname]);

  return (
    <>
      <div className={`App ${selectedBackground}`}>
        <MainMenu />
        <Outlet />
      </div>
    </>
  );
}

export default App;
