import React, { useState } from 'react';
import {Carousel, CarouselControl, CarouselItem, CarouselIndicators } from 'reactstrap';

const items= [
    {
        src: 'assets/algos.png'
    },
    {
        src: 'assets/algo2.png'
    },
    {
        src: 'assets/algo3.png'
    }
];

const CarouselComp = (props ) => {
    const [activeIndex , setActiveIndex] = useState(0);
    const [animating , setAnimating] = useState(false);

    const next= () => {
        if(animating ) return;
        const nextIndex = activeIndex === items.length-1 ?0: activeIndex+1 ;
        setActiveIndex( nextIndex );
    }

    const previous = () => {
        if(animating ) return;
        const nextIndex = activeIndex === 0? items.length-1  : activeIndex -1;
        setActiveIndex (nextIndex );
    }

    const goToIndex = (newIndex ) => {
        if(animating ) return;
        setActiveIndex (newIndex );
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem onExiting = {() => setAnimating(true) }
            onExited = {() => setAnimating(false)}  style={{backgroundColor:"#00FF00"}}
            key= {item.src} >
                <img src= {item.src} style={{height:"500px", width:"1200px"}}/>
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex= {activeIndex}
        next={next}
        previous= {previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler= {goToIndex} />
            {slides}
        <CarouselControl direction="prev"  directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CarouselComp;