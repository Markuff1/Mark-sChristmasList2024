import "./christmaslist.css";
import { ChristmasList } from "./ChristmasList";
import ChristmasCountdown from './ChristmasCountdown';


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
      <ChristmasList/>
    </div>
  );
}

export default App;