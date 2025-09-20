import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logoplace from "../pages/component/logoPlace";
import NavMenu from "./lists/NavMenu";

function MainMenu() {
  const [activeUrl, setActiveURL] = useState<string>("");
  let navigate = useNavigate();

  useEffect(() => {
    let path = window.location.pathname;
    setActiveURL(path.toLowerCase());
  }, [window.location.pathname]);

  return (
    <div className="top-header">
      <div className="header-logo">
        <Logoplace.Logo />
      </div>
      <div className="line"></div>
      <div className="header-list-destination">
        <div
          onClick={() => {
            navigate("/");
          }}
          className={activeUrl === "/" ? "active" : ""}
        >
          00 Home{" "}
        </div>
        <div
          onClick={() => {
            navigate("destination");
          }}
          className={activeUrl.includes("destination") ? "active" : ""}
        >
          01 Destination{" "}
        </div>
        <div
          onClick={() => {
            navigate("crew");
          }}
          className={activeUrl.includes("crew") ? "active" : ""}
        >
          02 Crews
        </div>
        <div
          onClick={() => {
            navigate("technology");
          }}
          className={activeUrl.includes("technology") ? "active" : ""}
        >
          03 Technology
        </div>
      </div>
      <div className="header-list-second-destination">
        <div
          onClick={() => {
            navigate("/");
          }}
          className={activeUrl === "/" ? "active" : ""}
        >
          Home{" "}
        </div>
        <div
          onClick={() => {
            navigate("destination");
          }}
          className={activeUrl.includes("destination") ? "active" : ""}
        >
          Destination{" "}
        </div>
        <div
          onClick={() => {
            navigate("crew");
          }}
          className={activeUrl.includes("crew") ? "active" : ""}
        >
          Crew{" "}
        </div>
        <div
          onClick={() => {
            navigate("technology");
          }}
          className={activeUrl.includes("technology") ? "active" : ""}
        >
          Technology
        </div>
      </div>
      <NavMenu />
    </div>
  );
}
export default MainMenu;
