import React, { useState, useRef, useEffect, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Logoplace from "../../pages/component/logoPlace";

function NavMenu(): ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  let navigate=useNavigate();
  // useEffect(() => {
  // }, []);

  return (
    <nav>
      {!showMenu && (<span onClick={() => {
        setShowMenu(!showMenu)
      }}>
        <Logoplace.Menulogo />
      </span>)}

      {/* {showMenu && (<span onClick={() => {
        setShowMenu(!showMenu)
      }}>
        <Logoplace.Closelogo />
      </span>)} */}
  
      <div className={showMenu? "header-list-mobile active": "header-list-mobile"}> 
        <div className="header-list-mobile-list">

        {showMenu && (
        <span className="logomove" onClick={() => {setShowMenu(!showMenu)}}><Logoplace.Closelogo /></span>
        )}
           
           <div onClick={()=>{navigate('home'); setShowMenu(false)}}>00 Home</div>
           <div onClick={()=>{navigate('destination'); setShowMenu(false)}}>01 Destination</div>
           <div onClick={()=>{navigate('crew'); setShowMenu(false)}}>02 Crew</div>
           <div onClick={()=>{navigate('technology'); setShowMenu(false)}}>03 Technology</div>
         
         
        </div>
        
      </div>

    </nav>
  );
}
export default NavMenu