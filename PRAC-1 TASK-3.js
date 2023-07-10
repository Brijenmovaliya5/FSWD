var a = prompt("enter age");
if(a<18){
    console.log("minor");
}
else if(a>18 && a<65){
    console.log("adult");
}
else{
    console.log("senior");
}