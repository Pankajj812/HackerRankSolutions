//Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.

// Input 
// 5 4
// 1 2 3 4 5

// Output
// 5 1 2 3 4


// *******************************************************Solution 1*************************************************************//


//To rotate by one, store arr[0] in a temporary variable temp, move arr[1] to arr[0], arr[2] to arr[1] …and finally temp to arr[n-1]
// Let us take the same example arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2
// Rotate arr[] by one 2 times
// We get [2, 3, 4, 5, 6, 7, 1] after first rotation and [ 3, 4, 5, 6, 7, 1, 2] after second rotation.

rotateLeftOneByOne =(arrayElements,rotations)=>{
    while (rotations > 0) {
        //Looping Through all arrayElemets
        for (let i = 1; i < arrayElements.length; i++) {
            //Store the first element to temprorary Variable.
            let temp = arrayElements[i - 1];
            //Swap
            arrayElements[i - 1] = arrayElements[i];
            arrayElements[i] = temp;
            console.log(arrayElements);
        }
        rotations--;
    }
    // console.log(arrayElements);
  return arrayElements;
}

rotateLeftOneByOne([1, 3, 5, 7, 9] , 5);




// *******************************************************Solution 2*************************************************************//
// An idea is here to first store the elements upto d(given number of rotations) in one array and append it to rest array

//Pseudo Code Taken from GeekForGeeks
// Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
// 1) Store the first d elements in a temp array
//    temp[] = [1, 2]
// 2) Shift rest of the arr[]
//    arr[] = [3, 4, 5, 6, 7, 6, 7]
// 3) Store back the d elements
//    arr[] = [3, 4, 5, 6, 7, 1, 2]

rotateLeftByStoring = (array , rotations)=>{
let temporaryArr = array.splice(rotations);
//I have used splice here original array will be changed , splitting array into two parts
//Concatenating Elemnents
console.log([... temporaryArr, ... array])
return [... temporaryArr, ... array];
}

rotateLeftByStoring([1,2,3,4,5,6,7] , 2)

