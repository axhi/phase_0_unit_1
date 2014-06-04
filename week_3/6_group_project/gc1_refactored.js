// My role in the group is: Refcator

// Here is my part of the challenge:

// User story: the variable sumList takes a pre-set list array and for each element in that list, it adds the first
// to the next item in the list. 
var sumList = 0;
var randomList = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
    for(var i = 0; i < randomList.length; i++)
    {
         sumList += randomList[i];
    }
    console.log(sumList);

// User story: The variable median is set to 0, and a variable middle is defined. A predefined list is sorted after
// the length has been decided. If the the list is divisible by two, the middle is found and stored as the middle
// element.

var median = 0;
        var middle;
        var listlength = randomList.length;
        randomList.sort();
        if (listlength%2 !== 0){
           middle = Math.round(listlength-1);
           median = randomList[middle-1]; 
           }
        else{
           middle = listlength/2;
           median = (randomList[middle]+randomList[middle-1])/2;
        }
        console.log(median);

// User story: Mean is a variable set to 0. For a variable of randomList, which is defined on line 8, the sum from 
// the variable sumList is divided by the length of the list.

var mean = 0;
   for(var i = 0; i < randomList.length; i++)
   var listlength = randomList.length;
   {
		mean = sumList/randomList.length;
   }
   console.log(mean);