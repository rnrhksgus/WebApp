$(document).ready(function(){
    $( ".callout" ).css( "border", "solid 1px #ff0080" );
    $( ".code" ).css( "background", "#ccc" );
    $( ".code" ).css( "margin", "1px 2px" );
    $( ".code" ).css( "padding", "1px 4px" );
    $( ".code" ).css( "font-family", "monospace" );
    // $( ".highlight" ).css( "background", "#ff0" );
    // $( ".highlight" ).css( "font-style", "italic" );

    $( "div > a[target]" ).css( "background", "#ccc" );
    $( "div > a[href = 'http://www.daum.net']" ).css( "background", "#ff0080" );
    $("div[id^='high']").css("background", "#ccc");
    // $("span[id$='de']").css("font-style", "italic");
    // $("div[id*='o']").css("font-style", "italic");
});
