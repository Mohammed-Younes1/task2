import React, { useState, useEffect } from "react";
import MainMenu from "../navbar/MainMenu";
import CrewData from "../data/CrewData";
import CrewsList from "../navbar/lists/CrewsList";

type Person = {
  id: number;
  image: string;
  name: string;
  role: string;
  info: string;
};

function Crewpage() {
  const [crewinfo] = useState(CrewData);
  const [index, setIndex] = useState<number>(0);

  // useEffect(() => {
  //   const lastIndex = crewinfo.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, crewinfo]);

  // slider on 50seconds
  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 50000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <div className="">
      {/* full page 1 */}
      {/* <MainMenu /> */}
      {/* First header part */}
      <div className="middle-contents-crew">
      <div className="div-fix">
          <h2><em>02</em> MEET YOUR CREW</h2>
        </div>

        {crewinfo.map((item, indexPeople) => {
          const { id, image, name, role, info } = item;
          let position = "nextSlide";
          if(indexPeople===index){
            position="activeSlider"
          }
          if(indexPeople===index-1 || (index ===0 && indexPeople=== crewinfo.length-1)){
            position="lastSlider"
          }
          return (
            <React.Fragment key={id}>
              { index + 1  === item.id && ( 
              <div className={position} >
              <div className="middle-left-crew">
                <h2><em>02</em> MEET YOUR CREW</h2>
                <div className="middle-left-text-crew">
                    <h3>{role}</h3>
                    <h1>{name}</h1>
                    <p>{info}</p>
                    {/* <CrewsList /> */}

                    <div className="dot-slider">
                      <span className={index === 0 ? "active-slider": ""}
                       onClick={()=> setIndex(0)}>
                       </span>
                      <span className={index === 1 ? "active-slider": ""}
                       onClick={()=> setIndex(1)}>
                       </span>
                      <span className={index === 2 ? "active-slider": ""}
                       onClick={()=> setIndex(2)}>
                       </span>
                      <span className={index === 3 ? "active-slider": ""}
                       onClick={()=> setIndex(3)}>
                      </span>
                    </div>
                </div>
              </div>
              <div className="middle-right-crew">
                <img src={image} alt={name} />
                {/* <img src={require(item.image)} alt="person-img" /> */}
              </div>
              {/* <button className="prev" onClick={() => setIndex(index-1)}>
                sadasd----
              </button>
              <button className="next" onClick={() => setIndex(index+1)}>
                sadasd+++++
              </button> */}
            </div>)}
           
            </React.Fragment>
          );

        })} {/*map return*/}
        
      </div>
    </div>
  );
}

export default Crewpage;
