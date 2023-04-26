import React,{useState} from "react";

{/* I need to fix the active class when it changes */}    
function CrewsList(){
const [index, setIndex] = useState<number>(0);

    return (
        <div className="dot-slider">
            {/* <li className="li-slider">1<a href="#"></a></li>
            <li className="li-slider">1<a href="#"></a></li>
            <li className="li-slider">1<a href="#"></a></li>
            <li className="li-slider">1<a href="#"></a></li> */}
            <span className="active-slider" ><a href="" onClick={() => setIndex(index+1)}>s</a></span>
            <span><a href="crewB">s</a></span>
            <span><a href="crewC">s</a></span>
            <span><a href="crewD">s</a></span>
            <span><button className="prev" onClick={() => setIndex(index-1)}>s</button></span>
        </div>
      );
}
export default CrewsList;