let arr1 = [ 1, 2, 3 ];
let arr2 = [ "one", 2, "three" ];
let arr3 = [ [ 1, 2, 3 ],  [ "one", 2, "three" ] ];
let arr4 = [
    { name: "Fred", type: "object", luckyNumber: [ 5, 7, 13 ] },
      [ { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" } ],
      1, () => "arrays can contain functions too",
    "three"
];

console.log( arr1 );
console.log( arr2 );
console.log( arr3 );
console.log( arr4 );
console.log("------------------------------------------------------------------");

console.log( arr1[0] );
console.log( arr2[2] );
console.log( arr3[1] );
console.log( arr4[1][0] );
console.log( arr4[3]() );

console.log( arr1.length );
console.log( arr4.length );
console.log( arr4[1].length );

arr1[4] = 5;
console.log( arr1 );
console.log( arr1.length );

arr1[15] = 5;
console.log( arr1 );
console.log( arr1.length );

console.log( arr2[10] );
console.log( arr2.length );
console.log("------------------------------------------------------------------");

let arr5 = new Array();
let arr6 = new Array( 1, 2, 3 );
let arr7 = new Array( 2 );
let arr8 = new Array( "2" );

console.log( arr5 );
console.log( arr5.length );
console.log( arr6 );
console.log( arr6.length );
console.log( arr7 );
console.log( arr7.length );
console.log( arr8 );
console.log( arr8.length );
console.log("------------------------------------------------------------------");

let arr9 = [ "b", "c", "d" ];
console.log( arr9 );

console.log( arr9.push( "e" ) );
console.log( arr9 );

console.log( arr9.pop( "e" ) );
console.log( arr9 );


console.log( arr9.unshift( "a" ) ); // 원래 배열에 적용 x
console.log( arr9 );
console.log( arr9 );
console.log( arr9.shift() );
console.log( arr9 );
console.log("------------------------------------------------------------------");


let arr10 = [ 1, 2, 3 ];
console.log( arr10 );

console.log( arr10.concat( 4, 5, 6 ) );
console.log( arr10 );

console.log( arr10.concat( [ 4, 5, 6] ) );
console.log( arr10 );

console.log( arr10.concat( [ 4, 5 ], 6 ) );
console.log( arr10 );

console.log( arr10.concat( [ 4, [ 5, 6 ] ] ) );
console.log( arr10 );

console.log( arr10.concat( 'a', 'b', 'c' )[ arr10.length - 1 ] );
console.log( arr10 );
console.log("------------------------------------------------------------------");

let arr11 = [ 1, 2, 3, 4, 5 ];

console.log( arr11 );

console.log( arr11.slice( 3 ) );
console.log( arr11 );

console.log( arr11.slice( 2, 4 ) );
console.log( arr11 );

console.log( arr11.slice( -2 ) );
console.log( arr11 );

console.log( arr11.slice( 1, -2 ) );
console.log( arr11 );

console.log( arr11.slice( -2, -1 ) );
console.log( arr11 );
console.log("------------------------------------------------------------------");

let arr12 = [ 1, 5, 7 ];
console.log( arr12 );

arr12.splice( 1, 0, 2, 3, 4 );
console.log( arr12 );

arr12.splice( 5, 0, 6 );
console.log( arr12 );

arr12.splice( 1, 2 );
console.log( arr12 );

arr12.splice( 2, 1, 'a', 'b' );
console.log( arr12 );
console.log("------------------------------------------------------------------");

let arr13 = [ 1, 2, 3, 4 ];
console.log( arr13 );

arr13.copyWithin( 1, 2 );
console.log( arr13 );

arr13.copyWithin( 2, 0, 2 );
console.log( arr13 );

arr13.copyWithin( 0, -3, -1 );
console.log( arr13 );
console.log("------------------------------------------------------------------");

let arr14 = new Array(5).fill(1);
console.log( arr14 );

arr14.fill( "a" );
console.log( arr14 );

arr14.fill( "b", 1 );
console.log( arr14 );

arr14.fill( "c", 2, 4 );
console.log( arr14 );

arr14.fill( 5.5, -4 );
console.log( arr14 );

arr14.fill( 0, -3, -1 );
console.log( arr14 );
console.log("------------------------------------------------------------------");

let arr15 = [ 1, 2, 3, 4, 5 ];
console.log( arr15 );

arr15.reverse();
console.log( arr15 );

arr15 = [ 5, 4, 3, 2, 1 ];
console.log( arr15 );

arr15.sort();
console.log( arr15 );

arr15 = [ { name: "Suzanne" }, { name: "Jim"}, { name: "Trevor" }, { name: "Amanda"} ];
console.log( arr15 );

arr15.sort();
console.log( arr15 );

arr15.sort( (a, b) => a.name > b.name);
console.log( arr15 );

arr15.sort( (a, b) => a.name[1] < b.name[1]);
console.log( arr15 );
console.log("------------------------------------------------------------------");

const o = { name: "Jerry" };
let arr16 = [ 1, 5, "a", o, true, 5, [ 1, 2 ], "9" ];
console.log( o );
console.log( arr16 );
console.log( arr16.indexOf( 5 ) );
console.log( arr16.lastIndexOf( 5 ) );
console.log( arr16.indexOf( "a" ) );
console.log( arr16.lastIndexOf( "a" ) );
console.log( arr16.indexOf( {name: "Jerry"} ) );
console.log( arr16.indexOf( o ) );
console.log( arr16.indexOf( [ 1, 2 ] ) );
console.log( arr16.indexOf( "9" ) );
console.log( arr16.indexOf( 9 ) );

console.log( arr16.indexOf( "a", 5 ) );
console.log( arr16.indexOf( 5, 5 ) );
console.log( arr16.lastIndexOf( 5, 4 ) );
console.log( arr16.lastIndexOf( true, 3 ) );

console.log("------------------------------------------------------------------");
