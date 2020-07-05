import React from 'react';
import {Card, CardImg, CardOverlay, CardText, CardBody, CardTitle, CardSubtitle, PaginationLink, PaginationItem, Pagination}  from 'reactstrap';
import CarouselComp from './CarouselComponent';


function Home( props){
    return (
        
        <div className="container">
            <br/>
            <CarouselComp />
            <br/>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <h1> Why this App?</h1>
                    <p>This app provides theory related to various sorting algorithms , path finding 
                        algorithms e.g spanning tree, Dijkstra , various tree related algorithms like
                         suffix tree, Retrieval Tree , Binary Indexed Tree , Segment Tree , and many more...</p>

                    <p>We also provide selected questions to practice each section mentioned in theory,
                         along with hints and solutions. These selected questions will provide the gist
                          of all algorithms this app focuses on and the user is supposed to understand all
                           the concepts clearly as the problems provided vary from 800-1700 difficulty level . 
                           This numerical value represents the difficulty , 900 being basic and 1700 representing
                            relatively difficult ones. The practice problems are inspired and adopted from Codeforces
                             - a competitive programming  based platform. </p>
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    );
}

export default Home;