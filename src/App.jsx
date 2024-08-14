import FirstApp from "./components/First/FirstApp";
import SecondApp from "./components/Second/SecondApp";
import FourthApp from "./assets/search/FourthApp";

function App() {
  return (
    <div>
      <h2>3- Third</h2>
      <FourthApp />
      <h2 className="p-5">1- First</h2>
      <FirstApp />
      <h2 className="p-5">2- Second</h2>
      <SecondApp />
    </div>
  );
}

export default App;
