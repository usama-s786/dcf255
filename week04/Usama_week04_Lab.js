/*  Name: Usama Sidat
    ID: 131034217
    Email: uisidat@myseneca.ca  */
var original_array;                                      //Declaring the variables
var array_2;                                     
var frame_array;
var sum;
original_array = [0,1,1,1,1,1,1,0,1,1,1,1,1,1,0];        //Initialising the variables to the respective values
array_2 = [0,1,1,1,1,1,1,0,1,1,1,1,1,1,0];
frame_array = [0,1,1,1,1,1,1,0]; 

for (var i=0; i<array_2.length; i++){                   //For loop to traverse through the array and look for 5 consecutive 1 and add a zero in the end if found
    if(array_2[i]==1){
        sum+=1;                                         //Counter for 1 found
    }
    if (array_2[i]==0){
        sum=0;                                          //Counter reset to zero if 0 found in between
    }
    else if (sum%5==0){
        array_2.splice(i+1,0,0);                        //Adding 0 after 5 consecutive 1's
    }
}
console.log("Before Stuffing : ", original_array.join(" "), "--", original_array.length, "characters"); //Printing the original array
console.log("After Stuffing  : ", array_2.join(" "), "--", array_2.length, "characters");               //Printing Stuffed array
console.log("After Framing   : ", frame_array.concat(array_2.concat(frame_array)).join(" "));           //Printing Framed array


