import Imagelace from "../component/imagePlace";
import CrewsList from "../../navbar/lists/CrewsList";
import MainMenu from "../../navbar/MainMenu";


function CrewD(){

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
                    <h3>Flight Engineer</h3>
                    <h1>Anousheh Ansari</h1>
                    <p>Anousheh Ansari is an Iranian American engineer
                      and co-founder of Prodea Systems.
                      Ansari was the fourth self-funded space tourist,
                      the first self-funded woman to fly to the ISS,
                      and the first Iranian in space. </p>
                      <CrewsList/>
               </div>
               
           </div>

           <div className="middle-right-crew">
               <img src={Imagelace.CrewpicD} alt="Anousheh-Ansari" />
           </div>
       </div>
           

     </div>
    )
}
export default CrewD;