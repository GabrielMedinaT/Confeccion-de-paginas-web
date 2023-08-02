import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Carrosuel from "./components/Carrosuel";
import OffcanvasExample from "./components/OffcanvasExample";
import Acordeon from "./components/Acordeon";

function App() {
  return (
    <div className="App">
      <OffcanvasExample />

      <Acordeon />
    </div>
  );
}

export default App;
