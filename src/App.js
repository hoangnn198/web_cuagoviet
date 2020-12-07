import React, { useState } from 'react';
// import backgr1 from "./res/image/backgr1.jpg";
import Slider from "./components/custom/SliderComponents";
import ic_menu from "./res/image/ic_menu.png";
import ic_search from "./res/image/ic_search.png";
import './App.css'

const App = () => {
  const [checkMenu, setCheckMenu] = useState(false)
  return (
    <div >

      {/* header  */}
      <div className="header" >
        <div style={{ width: '40%', display: 'flex', flexDirection: 'row', height: '100%' }}>
          <div className="ic_menuView" onClick={() => setCheckMenu(!checkMenu)} >
            <img src={ic_menu} alt="" style={{ height: 35, width: 35 }} />

          </div>
          <div style={{ width: '80%', height: '100%', backgroundColor: 'lavender', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h5>Logo</h5>
          </div>
        </div>

        {/* search  */}
        <div className="ic_searchView">
          <img src={ic_search} className="ic_search" alt="search" />
        </div>
      </div>
      {checkMenu &&
        <div className="menuView" onClick={() => setCheckMenu(false)}>
          <div className="menu" >

          </div>
        </div>
      }
      <div className="divHide" />

      {/* slider  */}
      <div className="slider">
        <Slider />
      </div>

      {/* body */}
      <div className="body">
        <div className="products">
          {/* <h4 style={{ marginTop: 20, textAlign: 'center' }}>PRODUCTS</h4> */}

          <div style={{ backgroundColor: 'cadetblue', height: 200, width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div class="col-6  col-xl-3" style={{ height: '200px', backgroundColor: 'red', }}>
              1 of 2
           </div>
            <div class="col-6 col-xl-3" style={{ height: '200px', backgroundColor: 'yellowgreen', }}>
              2 of 2
            </div>
            <div class="col-6 col-xl-3" style={{ height: '200px', backgroundColor: 'red', }}>
              1 of 2
           </div>
            <div class="col-6 col-xl-3" style={{ height: '200px', backgroundColor: 'yellowgreen', }}>
              2 of 2
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}



export default App