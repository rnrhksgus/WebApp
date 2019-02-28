function printDOM(node, prefix){
    console.log( prefix + node.nodeName + '-' + node.nodeType);
    for (let i = 0; i < node.childNodes.length; ++i) {
        printDOM( node.childNodes[i], prefix + '\t' );
    }
}
//printDOM( document, '');

console.log(document.getElementById( 'content' ) );

const callouts = document.getElementsByClassName( 'callout' );
console.log( callouts );

const paragraphs = document.getElementsByTagName( 'p' );
console.log( paragraphs );

document.write("<p><b>document</b> object - write() methode</p>");
const para1 = document.getElementsByTagName( 'p' )[0];
console.log( para1.textContent );
console.log( para1.innerHTML );
//para1.textContent = "Modified HTML file";
para1.innerHTML = "Modified <i>HTML</i> file";

const p1 = document.createElement( 'p' )
const p2 = document.createElement( 'p' )
p1.innerHTML = "I was <b><i>created</b></i> dynamically!";
p2.textContent = "I was <b><i>also</b></i> created dynamically!";

const parent = document.getElementById( 'content');
const firstChild = parent.childNodes[0];
parent.insertBefore( p1, firstChild );
parent.appendChild( p2 );
