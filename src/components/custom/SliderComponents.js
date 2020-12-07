import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import backgr1 from "../../res/image/backgr1.jpg";
import "../../css/slider.css";
const items = [
    {
        src: backgr1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: backgr1,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: backgr1,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (

            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div className="imgView">
                    <img src={item.src} alt={item.altText} style={{ height: '100%', width: '100%' }} />
                </div>

                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>


        );
    });

    return (
        <div style={{ height: '100%', width: '100%' }} >
            <Carousel
                autoPlay={true}
                interval={2000}
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>

    );
}

export default Example;