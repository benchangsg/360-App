import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

const data = [
  {
    id: 1,
    title: "Pandan Gardens",
    houseType: "5-Bedroom",
    address: "Blk 405 Pandan Gardens",
    description: "",
  },
  {
    id: 2,
    title: "The Dairy Farm",
    houseType: "3-Bedroom",
    address: "Bukit Timah",
    description: "",
  },
  {
    id: 3,
    title: "The Hillview",
    houseType: "3-Bedroom",
    address: "Hillview Rd",
    description: "",
  },
];

function App() {
  return (
    <nav>
      <Header data={data}/>
      <Portfolio data={data}/>
    </nav>
  );
}

export default App;
