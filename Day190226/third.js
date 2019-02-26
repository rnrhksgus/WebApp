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

function average(a, b){
    console.log(`a = ${a}\tb = ${b}`);
    return (a + b) / 2;
}

console.log("average(5, 10) = " + average(5, 10));
console.log("------------------------------------------------------------------");

var a = 5, b = 10;
console.log("average(a, b) = " + average(a, b));
console.log("------------------------------------------------------------------");

console.log("average(5) = " + average(5));
console.log("average() = " + average());
console.log("------------------------------------------------------------------");

function func(x){
    console.log(`func 내부 : x = ${x}`);
    x = 5;
    console.log(`func 내부 : x = ${x} (할당 후)`);
}

var x = 3;
console.log(`func 호출 전 : x = ${x}`);
func(x);
console.log(`func 호출 후 : x = ${x}`);
console.log("------------------------------------------------------------------");

function func2 (o){
    console.log("o = " + o);
    o.message = `fun2 안에서 수정 (이전값 : ${o.message})`;
    console.log("o = " + o);
}

var o2 = {message: "초기값"};
console.log(`func2 호출 전 : ${o2.message}`);
func2(o2);
console.log(`func2 호출 후 : ${o2.message}`);
console.log("------------------------------------------------------------------");

function func3 (o){

    o.message = `fun3 안 수정`;
    o = {message: "새로운 객체"};
    console.log(`func3 내부 : o.message = ${o.message} (할당후)`);
}

var o3 = {message: "초기값"};
console.log(`func3 호출 전 : o.message = ${o3.message}`);
func3(o3);
console.log(`func3 호출 후 : o.message = ${o3.message}`);
console.log("------------------------------------------------------------------");

function func4 (o){
    o = {message: "새로운 객체"};
    return o;
}

var o4 = {message: "초기값"};
console.log(`func3 호출 전 : o.message = ${o4.message}`);
o4 = func4(o4);
console.log(`func3 호출 후 : o.message = ${o4.message}`);
console.log("------------------------------------------------------------------");

function getSentence ( {subject, verb, object} ){
    return `${subject} ${verb} ${object}`;
}

var o5 = { subject: 'I', verb: 'love', object: 'JavaScript'};
console.log(getSentence(o5));
console.log("------------------------------------------------------------------");

function getSentenceArray ( [subject, verb, object] ){
    return `${subject} ${verb} ${object}`;
}

var arr2 = ['I', 'love', 'JavaScript'];
console.log(getSentenceArray(arr2));
console.log("------------------------------------------------------------------");

function addPrefix ( prefix, ...words ){
    var prefixWords = [];
    for (var i = 0; i < words.length; ++i) {
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}

console.log(addPrefix("con", "verse", "vex"));
console.log("------------------------------------------------------------------");

function f3( a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}

console.log(f3(5,6,7));
console.log(f3(5,6));
console.log(f3(5));
console.log(f3());
console.log("------------------------------------------------------------------");

var o5 = {
    name: 'homg',
    bark: function(){ return "Woof!";}
}

console.log(o5.name + " " + o5.bark());

var o6 = {
    name: "Kim",
    bark(){ return "Woof!";}
}

console.log(o6.name + " " + o6.bark());
console.log("------------------------------------------------------------------");

var o7 = {
    name: "Park",
    speak(){ return `My name is ${this.name}`;}
}

console.log("o7.speak() = " + o7.speak());

var speak = o7.speak;
console.log("speak == o7.speak : " + (speak == o7.speak));
console.log("speak() = " + speak());
console.log("------------------------------------------------------------------");

var o8 = {
    name: "Julie",
    greetBackward: function(){
        const self = this;
        function getReverseName() {
            var nameBackwards = '';
            for (var i = self.name.length -1; i>=0; --i) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
}

console.log("o8.greetBackward() = " + o8.greetBackward());
console.log("------------------------------------------------------------------");

var f11 = function(){ return "Hello!!!"; }
var f11_r = () => "Hello!!!";
console.log(f11_r());

var f12 = function(name) {return `Hello ${name}`;}
var f12_r = name => `Hello ${name}`;
console.log(f12_r("Hong"));

const f13 = function(a, b){ return a + b; }
const f13_r = (a, b) => a + b;
console.log(f13_r(5, 10));
