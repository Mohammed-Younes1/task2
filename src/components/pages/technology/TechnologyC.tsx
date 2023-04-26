import Imagelace from "../component/imagePlace";
import Sliderbartech from "../../navbar/lists/Sliderbartech";
import MainMenu from "../../navbar/MainMenu";

function TechnologyC(){

    return (
        <div className="first-page-technology"> 
        {/* full page 1 */}

        <MainMenu/>
       {/* First header part */}

       <div className="contents-technology">
           
            <h2>03 SPACE LAUNCH 101</h2>
             {/* pic of tablet and mobile */}
            <div className="technology-smaller-pic">
                <img src={Imagelace.TechpicsmallC} alt="SPACE-CAPSULE-S"/>
            </div>
            <div className="page-content-technology">
                {/* sider part */}
                <Sliderbartech />
                {/* text part */}
                <div className="left-technology">
                    <h3>THE TERMINOLOGY…</h3>
                    <h1>SPACE CAPSULE</h1>
                    <p>A space capsule is an often-crewed spacecraft that uses a 
                        blunt-body reentry capsule to reenter the Earth's atmosphere
                        without wings. Our capsule is where you'll spend your time
                        during the flight. It includes a space gym, cinema, and
                        plenty of other activities to keep you entertained.</p>
                    </div>
                {/* image part     */}
                <div className="right-technology">
                    <img src={Imagelace.TechpicfullC} alt="SPACE-CAPSULE"/>
                </div>
               
           </div>
       </div>
           

     </div>
    )
}
export default TechnologyC;