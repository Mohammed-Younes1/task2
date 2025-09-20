import React, { useState, useEffect } from "react";
import Imagelace from "./component/imagePlace";
import Sliderbartech from "../navbar/lists/Sliderbartech";
import MainMenu from "../navbar/MainMenu";
import TechnologyData from "../data/TechnologyData";

type Person = {
  id: number;
  imagef: string;
  images: string;
  tech: string;
  info: string;
};

function TechnologyPage() {
  const [technologyinfo] = useState(TechnologyData);
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="">
      {technologyinfo.map((item, indexPeople) => {
        const { id, imagef, images, tech, info } = item;
        console.log();
        return (
          <React.Fragment key={id}>
            {index + 1 === item.id && (
              <div className="contents-technology">
                <h2>
                  <em>03</em> SPACE LAUNCH 101
                </h2>
                <div className="page-content-technology">
                  {/* pic of tablet and mobile */}
                  <div className="technology-smaller-pic">
                    <img src={images} alt="LAUNCH-VEHICLE-S" />
                  </div>
                  {/* sider part */}
                  <div className="slider-technology">
                    <li
                      className={
                        index === 0
                          ? "li-slider slider-technology-active"
                          : "li-slider"
                      }
                      onClick={() => setIndex(0)}
                    >
                      <a>1</a>
                    </li>
                    <li
                      className={
                        index === 1
                          ? "li-slider slider-technology-active"
                          : "li-slider"
                      }
                      onClick={() => setIndex(1)}
                    >
                      <a>2</a>
                    </li>
                    <li
                      className={
                        index === 2
                          ? "li-slider slider-technology-active"
                          : "li-slider"
                      }
                      onClick={() => setIndex(2)}
                    >
                      <a>3</a>
                    </li>
                  </div>

                  {/* <Sliderbartech /> */}
                  {/* text part */}
                  <div className="left-technology">
                    <h3>THE TERMINOLOGY…</h3>
                    <h1>{tech}</h1>
                    <p>{info}</p>
                  </div>
                  {/* image part     */}
                  <div className="right-technology">
                    <img src={imagef} alt={tech} />
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}{" "}
      {/*map return*/}
    </div>
  );
}
export default TechnologyPage;
