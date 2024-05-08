//Part 1 'Fizz Buzz'

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
            console.log(`Fizz Buzz`);
    } else if (i % 5 == 0){
        console.log(`Buzz`);
    } else if (i % 3 == 0){
        console.log(`Fizz`)
    }
    else {console.log(i)}
}

// Part 2 'Prime Time'

let n = 17; //set arbitary number of n
let i = n + 1
let prime = false; //set up boolean value to check if number is prime

while(prime = false){ //set up while loop for i being a counter that will count to the next number
    count = 2;
    i++;
    if(i % count == 0){
        prime = false;
    } else {prime = true;}
}
console.log(i);

// Part 3 'Feeling Loopy' 
//create a grid of four cells, that contain strings. use an empty string variable c, to go over the csv string and then log everything in the comma into a cell.
// when reaching a comma, reset string c to zero.
// when reaching a \n, go back to the first cell.

let cell1 ='';
let cell2='';
let cell3 ='';
let cell4 ='';
let c =''; //empty string reader
const csv = `ID,Name,Occupation,Age`;

//try to do a for loop within a for loop. 
for (c of csv) { //for loop with string c of csv reading through the string.
    if (c !== `,`) { //have the string c go through the csv string until it reaches a comma.
        cell1 += c; //Concatenate and asign cell1 with string c. 
        c = ``; //reset string c to zero.
    }
}

console.log(cell1)