import React, { useState } from 'react';
import "../../css/topNav.css";
import ic_menu from "../../res/image/ic_menu.png";
import ic_search from "../../res/image/ic_search.png";


function TopNavComponents() {
    const [checkMenu, setCheckMenu] = useState(false)
    const [checkSearch, setCheckSearch] = useState(false)
    return (
        <div style={{ position: 'relative' }}>
            <div className="topNav" >
                <div style={{ backgroundColor: 'red', height: '100%', width: '50%', alignItems: 'center', display: 'flex' }}>
                    <div onClick={() => setCheckMenu(!checkMenu)}>
                        <img className="ic_menu" src={ic_menu} alt="" />
                    </div>

                    <div className="logo">
                        <h3> Logo </h3>
                    </div>
                </div>
                <div style={{ backgroundColor: 'yellow', height: '100%', width: '50%', alignItems: 'center', display: 'flex', flexDirection: 'row-reverse' }}>
                    <img className="ic_search" src={ic_search} alt="" onClick={() => setCheckSearch(!checkSearch)} />
                </div>
                {checkSearch &&
                    <div className="search" >

                    </div>}
            </div>
            {checkMenu ?
                <div style={{ background: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100vh', position: 'fixed' }}>
                    <div className="menu" ></div>

                </div>


                : null
            }

        </div >


    );

}

export default TopNavComponents