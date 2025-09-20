import Imagelace from "../component/imagePlace";
import CrewsList from "../../navbar/lists/CrewsList";
import MainMenu from "../../navbar/MainMenu";

function CrewB() {
  return (
    <div className="first-page-crew">
      {/* full page 1 */}

      {/* <NavbarCrew/> */}
      <MainMenu />
      {/* First header part */}

      <div className="middle-contents-crew">
        <div className="div-fix">
          <h2>02 MEET YOUR CREW</h2>
        </div>
        <div className="middle-left-crew">
          <h2>02 MEET YOUR CREW</h2>
          <div className="middle-left-text-crew">
            <h3>Mission Specialist </h3>
            <h1>MARK SHUTTLEWORTH</h1>
            <p>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
            <CrewsList />
          </div>
        </div>

        <div className="middle-right-crew">
          <img src={Imagelace.CrewpicB} alt="MARK-SHUTTLEWORTH" />
        </div>
      </div>
    </div>
  );
}
export default CrewB;
