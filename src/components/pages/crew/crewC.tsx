import Imagelace from "../component/imagePlace";
import CrewsList from "../../navbar/lists/CrewsList";
import MainMenu from "../../navbar/MainMenu";


function CrewC(){

    return (
        <div className="first-page-crew"> 
        {/* full page 1 */}
        <MainMenu/>
        {/* <NavbarCrew/> */}
       {/* First header part */}

       <div className="middle-contents-crew">
            <div className="div-fix">
                <h2>02 MEET YOUR CREW</h2>
            </div>
           <div className="middle-left-crew">
               <h2>02 MEET YOUR CREW</h2>
               <div className="middle-left-text-crew">
                    <h3>PILOT</h3>
                    <h1>Victor Glover</h1>
                    <p>Pilot on the first operational flight of the SpaceX
                      Crew Dragon to the International Space Station.
                      Glover is a commander in the U.S. Navy where he pilots an F/A-18.
                      He was a crew member of Expedition 64, 
                      and served as a station systems flight engineer. </p>
                      <CrewsList />
               </div>
               
           </div>

           <div className="middle-right-crew">
               <img src={Imagelace.CrewpicC} alt="Victor-Glover" />
           </div>
       </div>
           

     </div>
    )
}
export default CrewC;