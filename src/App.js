// import logo from './logo.svg';
import './App.css';
import TopNav from "./components/custom/TopNavComponents";
import Slider from "./components/custom/SliderComponents";
import backgr1 from "./res/image/backgr1.jpg";

function App() {
  return (
    <div className="App">

      {/* header  */}
      <div className="header">
        <TopNav />
      </div>
      {/* body  */}
      <div className="hideHeader" />

      <div className="body">
        <div >
          <Slider />
        </div>


      </div>

      {/* header  */}
      <div className="footer">

      </div>


    </div>
  );
}

export default App;
