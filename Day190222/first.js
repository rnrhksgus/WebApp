var a;
let b = 20;

console.log("Hello, world!!!");
console.log("b = " + b);
console.log("a = " + a);
console.log("a + b = " + (a + b));

a = 30;
console.log("a = " + a);

const x = 10;
console.log("x = " + x);

//x = 100;
console.log("x = " + x);

console.log();
console.log("------------------------------------------------------------------");
console.log();

var count = 10;
var blue = 0x0000ff;
var umask = 0o0022;
var roomTemp = 21.5;
var c = 3.0e6
var e = -1.6e-19;
var inf = Infinity;
var ninf = -Infinity;
var nan = NaN;

console.log(count);
console.log(blue);
console.log(umask);
console.log(roomTemp);
console.log(c);
console.log(e);
console.log(inf);
console.log(ninf);
console.log(nan);

console.log();
console.log("------------------------------------------------------------------");
console.log();

var small = Number.EPSILON;
var bigInt = Number.MAX_SAFE_INTEGER;
var max = Number.MAX_VALUE;
var minInt = Number.MIN_SAFE_INTEGER;
var min = Number.MIN_VALUE;
var nInf = Number.NEGATIVE_INFINITY;
var inf2 = Number.POSITIVE_INFINITY;
var nan2 = Number.NaN;

console.log(small);
console.log(bigInt);
console.log(max);
console.log(minInt);
console.log(min);
console.log(nInf);
console.log(inf2);
console.log(nan2);

console.log();
console.log("------------------------------------------------------------------");
console.log();

var dialog = 'Sam looked up, and sail "hello, old friend", as Max walked in.';
var imperative = "Don't do that!";
console.log(dialog);
console.log(imperative);

var dialog1 = "He looked up and said \"dont'tdo that!\" to Max.";
var dialog2 = 'He looked up and said "dont\'tdo that!" to Max.';
console.log(dialog1);
console.log(dialog2);
console.log("hello, \norld!!!");

console.log();
console.log("------------------------------------------------------------------");
console.log();

var currentTemp = 19.5;
const message = "The current temperature is" + currentTemp + "\u00b0c";
const message2 = `The current temperature is ${currentTemp}\u00b0c`;
console.log(message);
console.log(message2);
const multiline = "line1\
line2";
const multiline2 = "line1\n\
line2"
const multiline3 = "line1\
line2\
line3";
const multiline4 = "line1\n" + "line2\n" + "line3";
const multiline5 = 'Current temperature: \n' + `\t${currentTemp}\u00b0c\n` +
"Don't worry... the heat is on!";

console.log(multiline);
console.log(multiline2);
console.log(multiline3);
console.log(multiline4);
console.log(multiline5);

const result = 3 + '30';
const result2 = 3 * '30';
console.log(result);
console.log(result2);

console.log();
console.log("------------------------------------------------------------------");
console.log();

const heating = true;
const cooling = false;
console.log(heating);
console.log(cooling);

const RED = Symbol( "The color of a sunset!" );
const ORANGE = Symbol( "The color of a sunset!" );
console.log(RED);
console.log(ORANGE);
console.log(RED === ORANGE);

var currentTemp2;
console.log(currentTemp2);

var targetTemp2 = null;
currentTemp2 = 19.5
console.log(currentTemp2);
console.log(targetTemp2);
currentTemp2 = undefined;
console.log(currentTemp2);

console.log();
console.log("------------------------------------------------------------------");
console.log();

var obj = {};
console.log(obj);
obj.color= "yellow";
console.log(obj);
obj["not an indentifier"] = 3;
console.log(obj);
console.log(obj["not an indentifier"]);
console.log(obj["color"]);
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj);

console.log();
console.log("------------------------------------------------------------------");
console.log();

var sam1 = { name: 'Sam', age: 4 };
var sam2 = { name: 'Sam', age: 4 };
var sam3 = { name: 'Sam', classification: {
    kingdom: 'Anamalia', phylum:'Chordata', class:'Mamalia',
    order: 'Carnivoria', family: 'Felidas', sumfamily: 'Felinae',
    genus: 'Felis', Species: 'catus'}
};

console.log(sam1);
console.log(sam2);
console.log(sam3);
console.log(sam1 === sam2);
console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

console.log();
console.log("------------------------------------------------------------------");
console.log();

var s = "hello";
console.log(s.toUpperCase());
s.rating = 3;
console.log(s.rating);

console.log();
console.log("------------------------------------------------------------------");
console.log();

var a1 = [ 1, 2, 3, 4 ];
var a2 = [ 1, 'two', 3, null ];
var a3 = [ "contnet1", "contnet2", "contnet3", "contnet4" ];
var a4 = [ {name:"Ruby", hardness:9}, {name:"Diamond", hardness:10}, {name:"Topaz", hardness:8} ];
var a5 = [ [ 1, 3, 5 ] , [ 2, 4, 6 ] ];

console.log( a1 );
console.log( a2 );
console.log( a3 );
console.log( a4 );
console.log( a5 );

var arr = [ 'a', 'b', 'c' ];

console.log( arr );
console.log( arr.length );
console.log( arr[0] );
console.log( arr[ arr.length - 1 ] );

var arr2 = [ 1, 2, 'c', 4, 5 ];
console.log(arr2);
arr2[2] = 3;
console.log(arr2);

console.log();
console.log("------------------------------------------------------------------");
console.log();


var now = new Date();
console.log( now );
var halloween = new Date( 2019, 9, 31 );
console.log( halloween );
var halloweenParty = new Date( 2019, 9, 31, 19, 0 );
console.log( halloweenParty );

console.log( halloweenParty.getFullYear() );
console.log( halloweenParty.getMonth() );
console.log( halloweenParty.getDate() );
console.log( halloweenParty.getDay() );
console.log( halloweenParty.getHours() );
console.log( halloweenParty.getMinutes() );
console.log( halloweenParty.getSeconds() );
console.log( halloweenParty.getMilliseconds() );

console.log();
console.log("------------------------------------------------------------------");
console.log();
