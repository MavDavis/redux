import "./App.css";
import Interest from "./components/Interest";
import Info from "./components/Info";
import Footer from "./components/Footer";
function App({title,paragraph}) {
  return (
    <div className="App">
      <Info />
      <Interest title={'About'} paragraph={'Meticulous web developer with over 3 years of frontend experience and passion for responsive and aesthetic design. Worked on over 12  large scale projects both independently and with teams of  5 - 30.'}/>

      <Interest title={'Interest'} paragraph={'Blockchain learning, Seo, data structures, Artificial Intelligence and more as I grow.'}/>
      <Footer />
    </div>
  );
}

export default App;
