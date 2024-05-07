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

let cell1 =``
const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

for (const c of csv) {
	if (c == `\n`) {
		continue;
	}
    console.log(c)
}

console.log(csv)