import React , {Component} from 'react';
import { Pagination , PaginationItem , PaginationLink} from 'reactstrap';
import {Switch , Route , Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Visualiser from './VisualiserComponent';
import Theory from './TheoryComponent';
import TheoryDetail from './TheoryDetail';
import { THEORY } from '../shared/Theory';

class Main extends Component {
    constructor(props){
        super(props);

        this.state={
            theories: THEORY
        };
    }


    render(){

        const TheoryWithId= ({match}) =>{
            return (
                <TheoryDetail theory={this.state.theories.filter((theory) => theory.id=== parseInt(match.params.theoId , 10))[0]} />
            );
        }


        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/theory" component={() => <Theory theory={this.state.theories}  /> } />
                    <Route path="/visualiser" component={Visualiser} />
                    <Route path="/theory/:theoId" component={TheoryWithId} />
                    
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;