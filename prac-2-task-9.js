function myDisplayer(a) {
    console.log(a);
}
function myFirst() {
    myDisplayer("Hello");
}
function mySecond() {
    myDisplayer("Goodbye");
}
setTimeout(myFirst, 3000);
setTimeout(mySecond, 0);
