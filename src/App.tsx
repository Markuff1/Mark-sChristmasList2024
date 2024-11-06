import "./christmaslist.css";
import {ListOfItems} from "./ListOfItems";
import ChristmasCountdown from './ChristmasCountdown';
import React from "react";


function App() {
  return (
    <div className="CBackground">
      <div className="news">
        Now using React.ts
      </div>
      <div className="title">
        Mark's Christmas List
      </div>
      <ChristmasCountdown/>
      <ListOfItems/>
    </div>
  );
}

export default App;