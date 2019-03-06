
$(document).ready(function() {

});

$( ".bdiv" ).click(function() {
    var color = $( this ).css( "background-color" );
    $( "#result" ).html( "That div is <span style='color:" + color + ";'>" + color + "</span>." );
});

$( "p" ).on( "mouseover", function() {
  $( this ).css( "color", "red" );
});

$( ".cdiv" ).on( "click", function() {
  $( this ).css({
    width: function( index, value ) {
      return parseFloat( value ) * 1.2;
    },
    height: function( index, value ) {
      return parseFloat( value ) * 1.2;
    }
  });
});
