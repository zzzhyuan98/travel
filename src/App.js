import "./App.css";
import Header from "./Header";
import Travel from "./Travel";
import data from "./data";

function App() {
  const travelData = data.map(function (item) {
    return <Travel key={item.key} {...item} />;
  });

  return (
    <div>
      <Header />
      {travelData}
    </div>
  );
}

export default App;
