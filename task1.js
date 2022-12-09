const sumofString = "1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80"; 

function sumNumbers(str) {
    let sum = 0;
    
    const numbers = str.match(/[0-9]+/g); //To match numbers
    
    numbers.forEach(num => {
    sum += parseInt(num);
    });
    
    return sum;
    }

  console.log(sumNumbers(sumofString));