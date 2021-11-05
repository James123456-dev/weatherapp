import Navbar from "./components/layout/Navbar";
import Container from "./components/weather/Container";
import "./index.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="wrapper">
        <Container />
      </div>
    </div>
  );
}

export default App;
