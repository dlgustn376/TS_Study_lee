import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
// 입력한 숫자 이하로 결과가 나옴
rl.question('숫자를 입력해 주세요: ',(inputNumber)=>{
    let result = "";
    
    for(let i = 1; i<=inputNumber; i++){
        if(i>1){
            result += " ";
        }
        if(i % 3 === 0 && i%5 === 0){
            result += "FizzBuzz";
        }else if(i%3 === 0){
            result += "Fizz"
        }else if(i%5 === 0){
            result += "Buzz"
        }else{
            result += String(i); 
        }
    }
    console.log(result);

    rl.close();
});