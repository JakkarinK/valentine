import "./App.css";
import Homepage from "./page/homepage";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Music from "./assets/apologize.mp3";

function App() {
  return (
    <div className="main h-screen w-screen flex flex-column gap-2 justify-content-center align-items-center">
      <Homepage />

      <audio controls autoPlay loop id="myAudio">
        <source src={Music} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
