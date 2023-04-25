import React, { useEffect,useState } from "react";
import Logoplace from "../pages/component/logoPlace";
import NavMenu from "./lists/NavMenu";


function MainMenu(){
   const [activeUrl, setActiveURL] = useState<string>("");
   

   useEffect(() => {
      let path = window.location.pathname;
         setActiveURL(path.toLowerCase());
   }, [window.location.pathname]);

   return (
      <div className="top-header">
        <div className="header-logo">
            <Logoplace.Logo/>
        </div>
        <div className="line"></div>
        <div className="header-list-destination">
           <a href="home" className={activeUrl.includes("home")? "active" : "" } >00 Home </a>
           <a href="destination" className={activeUrl.includes("destination")? "active" : ""} >01 Destination</a>
           <a href="crew" className={activeUrl.includes("crew")? "active" : ""}>02 Crew</a>
           <a href="technology" className={activeUrl.includes("technology")? "active" : ""}>03 Technology</a>
        </div>
        <div className="header-list-second-destination">
           <a href="home" className={activeUrl.includes("home")? "active" : ""}>Home</a>
           <a href="destination" className={activeUrl.includes("destination")? "active" : ""}>Destination</a>
           <a href="crew" className={activeUrl.includes("crew")? "active" : ""}>Crew</a>
           <a href="technology"className={activeUrl.includes("technology")? "active" : ""}>Technology</a>
        </div>
        {/* {activeUrl +"ASD"} */}
        
        <NavMenu/>
      </div>
     
      );
}
export default MainMenu;