function myfunction(){
 let a=-5;
try{
    if(a<0) throw "number is negative"
}
catch(err){
console.log("input "+err);
}
}
myfunction();