import "./App.css";
import Data from './data'
import Card from './components/Card'
import Navbar from "./components/Navbar";
function App() {
  let cards = Data.map((item, ind) =>{
   return <Card item ={item} key={ind}/>
  })
  return (
    <div className="App">
      <Navbar/>
     <div className="cards">
      {cards}
     </div>
    </div>
  );
}

export default App;
