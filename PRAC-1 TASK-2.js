let input = prompt("Enter A for + , B for - , C for * and D for/: " , "A");
let x = 10;
let y = 5;
function operation(x,y){
    if(input == "A")
    {
        return x + y;
    }
    else if(input == "B")
    {
        return x - y; 
    }
    else if(input == "C")
    {
        return x * y;
    }
    else if(input == "D")
    {
        return x / y; }
    else{
        console.log("Wrong Input");
    }
}
let ans = operation(x,y);
console.log(ans);