import React, { Component } from 'react';
import '../../css/slider.css'
import backgr1 from '../../res/image/backgr1.jpg'

export default class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ height: '100%', width: '100%' }} >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" style={{ height: '100%', width: '100%' }} >
                        <div className="carousel-item active" style={{ height: '100%', width: '100%' }} >
                            <img src={backgr1} style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={backgr1} style={{ height: '100%', width: '100%' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={backgr1} style={{ height: '100%', width: '100%' }} />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    }
}
