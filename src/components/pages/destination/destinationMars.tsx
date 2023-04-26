import Imagelace from "../component/imagePlace";
import DestinationList from "../../navbar/lists/DestinationList";
import MainMenu from "../../navbar/MainMenu";



function DestinationMars(){

    return (
        <div className="first-page-destination"> 
         {/* full page 1 */}

        <MainMenu/>
        {/* First header part */}

        <div className="middle-contents-destination">
            <div className="middle-left-destination">
                <h2>01 PICK YOUR DESTINATION</h2>
                <img src={Imagelace.Mars} alt="Mars" />
            </div>

            <div className="middle-right-destination">
                {/* I need to fix the active class when it changes */}
                <DestinationList/>
                <h1>MARS</h1>
                <p>Don’t forget to pack your hiking boots. 
                    You’ll need them to tackle Olympus Mons,
                    the tallest planetary mountain in our solar system. 
                    It’s two and a half times the size of Everest!</p>
                <div className="destination-time">
                    <div className="distance-time">
                        <h3>AVG. DISTANCE</h3>
                        <h2>225 MIL. km</h2>
                    </div>
                    <div className="distance-time">
                        <h3>Est. travel time</h3>
                        <h2>9 months</h2>
                    </div>
                </div>
            </div>
        </div>
            

      </div>
      );
}
export default DestinationMars;