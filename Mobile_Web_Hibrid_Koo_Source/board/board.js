$(document).ready(function(){
    let boardlistArray = new Array();
    let number = 0;

    $('#board_save').bind('click', function(){
        let title = $('#board_title').val();
        let content = $('#board_content').val();
        let writer = $('#board_writer').val();
        let boardArray = new Array();

        boardArray[0] = ++number;
        boardArray[1] = title;
        boardArray[2] = writer;
        boardArray[3] = content;

        boardlistArray.push(boardArray);
        $('#board_table').append('<tr><td>' + boardArray[0] + '</td><td>' + boardArray[1] + '</td><td>' + boardArray[2] + '</td><td class="delete_icon"> <a href="#" class="board_delete ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all ui-btn-icon-notext" data-role="button" data-icon="minus" data-iconpos="notext" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" title=""><span class="ui-btn-inner"><span class="ui-btn-text"></span><span class="ui-icon ui-icon-minus ui-icon-shadow">&nbsp;</span></span></a> </td></tr>');
        $('#board_title').val('');
        $('#board_writer').val('');
        $('#board_content').val('');
        $(location).attr('href', '#page1');
    });

    $("#board_search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#board_table tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".board_delete").bind('click', function(){
        alert('asdf');
    });

});
