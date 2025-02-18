import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {

  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="container">
        {cards}
      </section>
    </div>
  );
}

export default App;
