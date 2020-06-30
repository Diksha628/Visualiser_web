import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle , Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link } from 'react-router-dom';

const TheoryDetail= (props) =>{
    const theory =props.theory;
    
    if(theory==null){
        return (<div></div>);
    }

    return (
        <div className="container">
        <div className="row" >
            <div className="col-12">
                <h3>{props.theory.name}</h3>
                <h4>{props.theory.complexity}</h4>
                <p>{props.theory.description}</p>
                <img src={props.theory.img} alt={props.theory.name}  width="60%" style={{margin:"10px"}}/>
                <p>{props.theory.algorithm}</p>
            </div>
        </div>
        </div>
    )
}

export default TheoryDetail;