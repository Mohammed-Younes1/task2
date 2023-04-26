import React,{useState} from "react";
import Imagelace from "./component/imagePlace";
import DestinationList from "../navbar/lists/DestinationList";
import MainMenu from "../navbar/MainMenu";
import DestinationData from "../data/DestinationData";

type s = {
    id: number;
    image: string;
    name: string;
    info: string;
    distance: string;
    travel: string;
  };

function DestinationPage(){
const[destinationinfo]=useState(DestinationData);
const [index, setIndex] = useState<number>(0);

    return (
        <div className=""> 
         {/* full page 1 */}

        {/* I need to fix the active class when it changes */}    
        {/* <MainMenu/> */}
        {/* First header part */}
        
        <div className="middle-contents-destination">
        {destinationinfo.map((item)=>{
             const {id, image, name, info, distance, travel}=item;
             return(
                <React.Fragment key={id}>
                    {index +1 === item.id && ( 
                      <div className="middle-left-destination">
                         <h2><em>01</em> PICK YOUR DESTINATION</h2>
                         <img src={image} alt={name} />
                      </div>
                        )}
                    {index + 1 === item.id && (
                      <div className="middle-right-destination">
                         {/* <DestinationList/> */}
                         {/* <div className="destintion-list">
                           <a href="#" className={index === 0 ? "active": ""}
                            onClick={() =>setIndex(0)}
                           >Moon</a>
                            <a href="#" className={index === 1 ? "active": ""}
                            onClick={() =>setIndex(1)}
                           >Mars</a>
                             <a href="#" className={index=== 2 ? "active": ""}
                            onClick={() =>setIndex(2)}
                           >Europa</a>
                             <a href="#" className={index=== 3 ? "active": ""}
                            onClick={() =>setIndex(3)}
                           >Titan</a>
                         </div> */}
                         <div className="destintion-list">
                         <span className={index === 0 ? "active": ""}
                            onClick={() =>setIndex(0)}
                           >Moon</span>
                            <span className={index === 1 ? "active": ""}
                            onClick={() =>setIndex(1)}
                           >Mars</span>
                             <span className={index=== 2 ? "active": ""}
                            onClick={() =>setIndex(2)}
                           >Europa</span>
                             <span className={index=== 3 ? "active": ""}
                            onClick={() =>setIndex(3)}
                           >Titan</span>   
                         </div>
                         <h1>{name}</h1>
                         <p>{info}</p>
                         {/* <div className="line-destination"></div>     */}
                         <div className="destination-time">
                            <div className="distance-time">
                                <h3>AVG. DISTANCE</h3>
                                <h2>{distance}</h2>
                            </div>
                            <div className="distance-time">
                                <h3>Est. travel time</h3>
                                <h2>{travel}</h2>
                            </div>
                         </div>
                     </div>
                    )}
                </React.Fragment>
             );
             })}

           
        </div>
            

      </div>
      );
}
export default DestinationPage;