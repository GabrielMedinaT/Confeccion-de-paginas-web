import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Carrosuel from "./components/Carrosuel";
import OffcanvasExample from "./components/OffcanvasExample";

function App() {
  return (
    <div className="App">
      <OffcanvasExample />
      <Carrosuel />
    </div>
  );
}

export default App;
