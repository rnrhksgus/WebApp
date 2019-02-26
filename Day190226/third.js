// 함수 정의
function sayHello(){
    console.log("Hello World");
}

// 함수 호출
sayHello();
console.log("------------------------------------------------------------------");

function getGreeting(){
    return "Hello world";
}

console.log(getGreeting());
console.log("------------------------------------------------------------------");

var message = getGreeting();
console.log("message = " + message);
console.log("------------------------------------------------------------------");

getGreeting();
var f = getGreeting;
console.log("f = " + f());
console.log("------------------------------------------------------------------");

var o = {};
o.f = getGreeting;
console.log("o.f = " + o.f());
console.log("------------------------------------------------------------------");

var arr = [1, 2, 3];
arr[1] = getGreeting;
for (var item of arr){
    console.log(typeof item);
}
console.log();
console.log("arr[1]() = " + arr[1]());
console.log("------------------------------------------------------------------");
