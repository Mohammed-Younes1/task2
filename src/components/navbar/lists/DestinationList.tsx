import React, { useEffect, useState } from "react";

{/* I need to fix the active class when it changes */}    
function DestinationList(){
    const [activeUrl, setActiveURL] = useState<string>("");

    // useEffect(() => {
    //     let path = window.location.pathname;
    //        setActiveURL(path.toLowerCase());
    //  }, [window.location.pathname]);

    return (
      <div className="destintion-list">
        
        <a href="Destination"  className="active">Moon</a>
        <a href="DestinationMars">Mars</a>
        <a href="DestinationEuropa">Europa</a>
        <a href="DestinationTitan">Titan</a>

        {/* <a href="Destination"
          className={activeUrl.includes("destination")? "active" : ""}>Moon</a>
        <a href="DestinationMars"
          className={activeUrl.includes("DestinationMars")? "active" : ""}>Mars</a>
        <a href="DestinationEuropa"
          className={activeUrl.includes("DestinationEuropa")? "active" : ""}>Europa</a>
        <a href="DestinationTitan"
          className={activeUrl.includes("DestinationTitan")? "active" : ""}>Titan</a> */}

      </div>
      
     
      );
}
export default DestinationList;