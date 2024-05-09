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

let n = 20; //set arbitary number of n
let num = n //set number counter to reference one plus n
let prime = false; //set up boolean value to check if number is prime


while(prime != true){ //set up while loop for when prime is not true.
    num++;//start num count to check a few numbers after n.
    prime = true; //debugger found this to be problematic. I'm not sure why, but I initially put this at the end of the loop. 
    for(let i = 2; i <= 10; i++) //initially I wanted to do an if statement first, and nest a for loop within it, but it got a bit complicated. I was advised to put the for loop above the if statement.
    {   //for loop that would create the variable i, so that i can be checked with num to find a remainder. i will continue to increase by one until it reaches ten or if...
        if(num % i === 0){ //if num % i is exactly 0, then i will stop counting
            prime = false; // then the prime bool will switch back to false
            break; //break out of the nested for loop, since the for loop has done it's job to find a number (i) that is divisible by the var num other than 1. 
    }
    //restart the loop, because prime is still not true. the for loop will conclude after i has reached 10. afterwards, if no number is divisible, prime will equal true, and the while loop will end.
    }
}
console.log(`The next prime number after ${n} is ${num}`);

// Part 3 'Feeling Loopy' 
//create a grid of four cells, that contain strings. use an empty string variable c, to go over the csv string and then log everything in the comma into a cell.
// when reaching a comma, reset string c to zero.
// when reaching a \n, go back to the first cell.

let cell1 ='';
let cell2='';
let cell3 ='';
let cell4 ='';
let c =''; //empty string reader
let count = 1; //empty counter var
const csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

//create a loop that has c go through the string, logging in the texts. if c encounters a comma, uptick the counter. Then check to see if the counter is at a specific number.
//Once count reaches a number, print whatever c has logged into the cell. 
// if encounter a \n, reset count to 1 and continue with loop. 

for (c of csv) { //for loop with string c of csv reading through the string csv.
    if (c === `,`) { //have the string c go through the csv string until it reaches a comma.
        count++; //uptick the counter when c has encountered the comma. 
    } else if(c === `\n`){ //if c encounters \n
        count = 1; //reset count
        continue; //countinue with loop
    } else{
        if (count === 1) {
            cell1 += c; //Concatenate and asign cell1 with string c since count = 1. 
        } else if (count === 2) {
            cell2 += c; //Concatenate and asign cell2 with string c since count = 2. 
        } else if (count === 3) {
            cell3 += c; //Concatenate and asign cell3 with string c since count = 3. 
        }  else if (count === 4) {
            cell4 += c; //Concatenate and asign cell4 with string c since count = 4. 
        } 
        
    }

}
   

console.log(cell1, cell2, cell3, cell4);