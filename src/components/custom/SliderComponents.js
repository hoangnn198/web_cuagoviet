import React from 'react'
import backgr1 from "../../res/image/backgr1.jpg";
import "../../css/slider.css"

const SliderComponents = () => {

    return (
        <div className="slider">
            <img src={backgr1} style={{ height: '100%', width: '100%' }} />
        </div>

    )
}

export default SliderComponents