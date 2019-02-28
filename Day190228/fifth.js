let foo = new Object();

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log( typeof foo );
console.log( foo );
console.log("------------------------------------------------------------------");

let foo1 = {
    name: 'foo',
    age: 30,
    gender : 'male',
    print: function() { console.log( `${this.name}:${this.age}:${this.gender}` ); }
};

console.log( typeof foo1 );
console.log( foo1 );
console.log( foo1.print() );
console.log( foo1.toString() );
console.log("------------------------------------------------------------------");

function Person2 ( name, age, gender, position ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
console.log( typeof Person2 );


let bar = new Person2( 'bar', 33, 'woman' );
console.log( typeof bar );
console.dir( bar );

let baz = new Person2('bax', 25, 'woman');
console.log( typeof baz );
console.dir( baz );
