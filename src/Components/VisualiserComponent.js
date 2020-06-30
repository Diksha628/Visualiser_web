import React, {Component} from 'react';
import {MDBBox, MDBCol , MDBRow , MDBBadge , MDBBtn } from 'mdbreact';
import {Card , CardTitle } from 'reactstrap';
import './Visualiser.css';
import { Button } from 'reactstrap';
import getBubbleSortAnimations  from '../SortingAlgos/BubbleSort';
import getMergeSortAnimations from '../SortingAlgos/MergeSort';

const PRIMARY_COLOR= 'turqoise';
const SECONDARY_COLOR = 'blue';
const TERNARY_COLOR= 'pink'
const ANIMATION_SPEED_MS= 1;

class Visualiser extends Component{
    constructor(props){
        super(props);

        this.state={
            initArray: []
        }

    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const arr =[];

        this.setState({
            initArray: arr
        });

        for(let i=0; i<70; i++){
            arr.push(randomIntFromInterval(5, 700));
        }

        this.setState({
            initArray: arr
        });

    }

    BubbleSort(){
        const animations = getBubbleSortAnimations(this.state.initArray);
        let arr= this.state.initArray;
        console.log("true");
        for(let i = 0 ; i < animations.length ;i++){
            console.log(arr[i]);
            console.log("here");
            console.log(animations[i]);
            const arrayBars= document.getElementsByClassName('array-bar');
            const isColorChange= i%4 !== 2 && i%4 !== 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ;
                if(color){
                setTimeout(() => {
                   barOneStyle.backgroundColor = SECONDARY_COLOR;
                   barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                }
                else{
                    setTimeout(() => {
                        barOneStyle.backgroundColor = TERNARY_COLOR;
                        barTwoStyle.backgroundColor = TERNARY_COLOR;
                    }, i * ANIMATION_SPEED_MS);
                }
            } 
            else {
                
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    MergeSort() {
        const animations = getMergeSortAnimations(this.state.initArray);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ;
                if(color){
                    setTimeout(() => {
                       barOneStyle.backgroundColor = SECONDARY_COLOR;
                       barTwoStyle.backgroundColor = SECONDARY_COLOR;
                    }, i * ANIMATION_SPEED_MS);
                    }
                    else{
                        setTimeout(() => {
                            barOneStyle.backgroundColor = TERNARY_COLOR;
                            barTwoStyle.backgroundColor = TERNARY_COLOR;
                        }, i * ANIMATION_SPEED_MS);
                    }
            } 
            else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    render(){

        let array=[];
        array=this.state.initArray;
        
        //for( let i=0; i<100 ;i++){
            //array.push(randomIntFromInterval(5, 700));
        //}
        
        return (
            <>
            <MDBBox>
            <MDBRow>
            <MDBCol size="2" style={{backgroundColor:"#80a5b0", width:"10px"}}>
                <Button style={{color:"black"}} onClick={()=> this.resetArray()} >New Array</Button>
                <Button style={{color:"black" }} onClick={()=> this.BubbleSort()} >Bubble Sort</Button>
                <Button style={{color:"black" }} onClick={()=> this.resetArray()} >Quick Sort</Button>
                <Button style={{color:"black" }} onClick={()=> this.MergeSort()} >Merge Sort</Button>
                <Button style={{color:"black" }} onClick={()=> this.resetArray()} >Heap Sort</Button>
            </MDBCol>
            <MDBCol size="8">
            <div className="array-container" >
                {array.map((value, idx) => (
                    <div className="array-bar" 
                    key={idx} 
                    style={{height: `${value}px` }}>
                    </div>
                ))}
                
            </div>
            </MDBCol>
            </MDBRow>
            </MDBBox>
            </>
        );
    }
}

function randomIntFromInterval(min , max) {
    return Math.floor(Math.random() * (max- min +1) + min);
}

function arraysAreEqual(array1, array2){
    if(array1.length !== array2.length){
        return false;
    }
    for(let i=0;i <array1.length ;i++){
        if(array1[i]!== array2[i]){
            return false;
        }
    }
    return true;
}

export default Visualiser;