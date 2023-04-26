import Imagelace from "../component/imagePlace";
import Sliderbartech from "../../navbar/lists/Sliderbartech";
import MainMenu from "../../navbar/MainMenu";

function TechnologyB(){

    return (
        <div className="first-page-technology"> 
        {/* full page 1 */}

        <MainMenu/>
       {/* First header part */}

       <div className="contents-technology">
           
            <h2>03 SPACE LAUNCH 101</h2>
              {/* pic of tablet and mobile */}
            <div className="technology-smaller-pic">
                <img src={Imagelace.TechpicsmallB} alt="LAUNCH-SPACEPORT-S"/>
            </div>
            <div className="page-content-technology">
                {/* sider part */}
                <Sliderbartech />
                {/* text part */}
                <div className="left-technology">
                    <h3>THE TERMINOLOGY…</h3>
                    <h1>SPACEPORT</h1>
                    <p>A spaceport or cosmodrome is a site for launching (or receiving)
                        spacecraft, by analogy to the seaport for ships or airport for
                        aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
                        situated to take advantage of the Earth’s rotation for launch.</p>
                    </div>
                {/* image part     */}
                <div className="right-technology">
                    <img src={Imagelace.TechpicfullB} alt="SPACEPORT"/>
                </div>
               
           </div>
       </div>
           

     </div>
    )
}
export default TechnologyB;