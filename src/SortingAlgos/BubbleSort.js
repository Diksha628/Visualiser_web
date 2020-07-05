export default function getBubblSortAnimations(array){
    let animations=[];
    let sortedArray= array.slice();

    if(array.length=== 1){
        return animations;
    }

    for( let i=0; i<array.length; i++){
        for( let j=0; j< array.length - i-1 ;j++){
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            let change= 0;
            if(sortedArray[j] > sortedArray[j+1]){
                animations.push([j, sortedArray[j+1]]);
                animations.push([j+1, sortedArray[j]])
                console.log(sortedArray[j+1]);
                let temp=sortedArray[j];
                sortedArray[j]=sortedArray[j+1];
                sortedArray[j+1]=temp;
                change=1;
            }
            if(change ===0){
                animations.push([j, sortedArray[j]]);
                animations.push([j+1 , sortedArray[j+1]])
                console.log(sortedArray[j]);
            }
        }
    }

    return animations;
}


