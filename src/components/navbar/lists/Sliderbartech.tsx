import React from "react";

{/* I need to fix the active class when it changes */}    
function Sliderbartech(){

    return (
        <div className="slider-technology">
            <li className="li-slider "><a href="technology">1</a></li>
            <li className="li-slider slider-technology-active" ><a href="technologyB">2</a></li>
            <li className="li-slider"><a href="technologyC">3</a></li>
        </div>
     
      );
}
export default Sliderbartech;