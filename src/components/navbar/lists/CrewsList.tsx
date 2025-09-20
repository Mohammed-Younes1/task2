import { useState } from "react";

function CrewsList() {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="dot-slider">
      <span className="active-slider">
        <a href="" onClick={() => setIndex(index + 1)}>
          s
        </a>
      </span>
      <span>
        <a href="crewB">s</a>
      </span>
      <span>
        <a href="crewC">s</a>
      </span>
      <span>
        <a href="crewD">s</a>
      </span>
      <span>
        <button className="prev" onClick={() => setIndex(index - 1)}>
          s
        </button>
      </span>
    </div>
  );
}
export default CrewsList;
