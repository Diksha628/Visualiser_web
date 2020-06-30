import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle , Breadcrumb, CardBody, BreadcrumbItem, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import { MDBBox, MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import TheoryDetail from './TheoryDetail';

class Theory extends Component {

    constructor(props) {
        super(props);

       this.state={
           selectedAlgo:null
       }
    }

    onAlgoSelect(algo){
        this.setState({
            selectedAlgo:algo
        });
    }

    render() {
        const theor = this.props.theory.map(theory => {
            return (
                
                    <MDBBox key={theory.id}  onClick={()=> this.onAlgoSelect(theory)}>
                        <CardTitle style={{color:"black"}}>{theory.name}</CardTitle>
                        <hr/>
                    </MDBBox>
                
            );
        });
        return (
            <MDBBox >
                <MDBRow>
                <MDBCol size="12">
                    <h3>Theory</h3>
                    <hr/>
                </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="3" style={{backgroundColor:"#80a5b0"}}>
                    {theor}
                    </MDBCol>
                    <MDBCol md="7">
                        <TheoryDetail theory={this.state.selectedAlgo} />
                    </MDBCol>
                </MDBRow>
                <hr/>
                <div className="conatiner" >
                <Pagination aria-label="Page navigation example" size="sm" style={{marginLeft:"600px"}} >
                    <PaginationItem >
                        <PaginationLink previous href="/home" />
                    </PaginationItem>
                    <PaginationItem >
                        <PaginationLink href="/home">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="/theory">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/practice"> 3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                     <PaginationLink href="/visualiser">4 </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="/practice" />
                    </PaginationItem>
                </Pagination>
                </div>
            </MDBBox>
        );
    }
}

export default Theory;
    