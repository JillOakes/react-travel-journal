// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  // this is where the map goes and the 
  //      <hr className="cardLine" />

  return (
    <div className="App">
      <Navbar />
      <section className="container">
        <Card />
        <hr className="cardLine" />
        <Card />
        <hr className="cardLine" />
        <Card />
      </section>
    </div>
  );
}

export default App;
