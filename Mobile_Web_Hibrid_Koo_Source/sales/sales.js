$(document).ready(function(){
    let tArray = [ ];
    let pArray = [  { name: "프린터", price: 10},
                    { name: "카메라", price: 50},
                    { name: "노트북", price: 120},
                    { name: "마우스", price: 1},
                    { name: "키보드", price: 5}  ];

    for ( i = 0; i < pArray.length; i++) {
        $('#p_info_1').append('<tr><td>' + pArray[i]["name"] + '</td><td>' + pArray[i]["price"] + '</td></tr>');
        $('#p_info_2').append('<tr><td>' + pArray[i]["name"] + '</td><td>' + pArray[i]["price"] + '</td></tr>');
    }

    $('#p_b_add_2').click(function(){
        let p_name = $('#p_name').val();
        let p_price = $('#p_price').val();

        if( p_name.length == 0 || p_price.length == 0){
            alert('빈칸을 입력해 주세요');
            return;
        }

        for ( i = 0; i < pArray.length; i++) {
            if( pArray[i]["name"] == p_name ){
                alert('동일한 품목명이 있습니다.');
                return;
            }
        }

        let tmpArray = {name: p_name, price: p_price};
        pArray.push(tmpArray);

        $('#p_info_1').append('<tr><td>' + p_name + '</td><td>' + p_price + '</td></tr>');
        $('#p_info_2').append('<tr><td>' + p_name + '</td><td>' + p_price + '</td></tr>');

        $('#p_name').val('');
        $('#p_price').val('');
    });

    $('#ps_b_add_2').click(function(){
        let s_name = $('#s_name').val();
        let s_price;
        let s_num = $('#s_num').val();

        if( s_name.length == 0 || s_num.length == 0){
            alert('빈칸을 입력해 주세요');
            return;
        }

        let flag = 0;
        for ( i = 0; i < pArray.length; i++ ) {
            if( pArray[i]["name"] == s_name ) {
                s_price = pArray[i]["price"];
                flag = 1;
            }
        }

        if (flag == 0) {
            alert('맞는 품목이 없습니다.')
            let s_name = $('#s_name').val('');
            let s_num = $('#s_num').val();
            return;
        } else {
            let s_total = s_price * s_num;
            let tmpArray = {name: s_name, price: s_price, num: s_num, total: s_total};
            tArray.push(tmpArray);

            $('#ps_info_1').append('<tr><td>' + s_name + '</td><td>' + s_price + '</td><td>' + s_num + '</td><td>' + s_total + '</td></tr>');
            $('#ps_info_2').append('<tr><td>' + s_name + '</td><td>' + s_price + '</td><td>' + s_num + '</td><td>' + s_total + '</td></tr>');

            $('#s_name').val('');
            $('#s_num').val('');
            flag = 0;
        }

    });

    $('#p_b_add_1').click(function(){
        $(location).attr('href', '#page2');
    });

    $('#p_b_finish').click(function(){
        $(location).attr('href', '#page1');
    });

    $('#ps_b_add_1').click(function(){
        $(location).attr('href', '#page3');
    });

    $('#p_b_modify').click(function(){
        let flag_name = 0;
        let p_name = $('#p_name').val();
        let p_price = $('#p_price').val();

        for ( i = 0; i < pArray.length; i++) {
            if( pArray[i]["name"] == p_name ){
                flag_name = 1;
                pArray[i]["price"] = p_price;
                for(  j = 0; j < tArray.length; j++ ){
                    if(tArray[j]["name"] == p_name){
                        tArray[j]["price"] = p_price;
                        tArray[j]["total"] = p_price * tArray[j]["num"];
                    }
                }
            }
        }
        if (flag_name == 0){
            alert('동일한 품목명이 없습니다. 등록해 주세요.');
        }
        else {
            alert('수정 완료');

            $('#p_name').val('');
            $('#p_price').val('');

            $('#p_info_1').empty();
            $('#p_info_2').empty();

            $('#p_info_1').append('<tr><th>품목명</th><th>판매 단가</th></tr>');
            $('#p_info_2').append('<tr><th>품목명</th><th>판매 단가</th></tr>');
            for ( i = 0; i < pArray.length; i++) {
                $('#p_info_1').append('<tr><td>' + pArray[i]["name"] + '</td><td>' + pArray[i]["price"] + '</td></tr>');
                $('#p_info_2').append('<tr><td>' + pArray[i]["name"] + '</td><td>' + pArray[i]["price"] + '</td></tr>');
            }

            $('#ps_info_1').empty();
            $('#ps_info_2').empty();
            $('#ps_info_1').append('<tr><th>품목명</th><th>판매 단가</th><th>판매 수량</th><th>판매액</th></tr>');
            $('#ps_info_2').append('<tr><th>품목명</th><th>판매 단가</th><th>판매 수량</th><th>판매액</th></tr>');
            for ( i = 0; i < tArray.length; i++) {
                $('#ps_info_1').append('<tr><td>' + tArray[i]["name"] + '</td><td>' + tArray[i]["price"] + '</td><td>' + tArray[i]["num"] + '</td><td>' + tArray[i]["total"] + '</td></tr>');
                $('#ps_info_2').append('<tr><td>' + tArray[i]["name"] + '</td><td>' + tArray[i]["price"] + '</td><td>' + tArray[i]["num"] + '</td><td>' + tArray[i]["total"] + '</td></tr>');
            }
        }
    });

    $('#ps_b_finish').click(function(){
        $(location).attr('href', '#page1');
    });

    $('#ps_b_graph').click(function(){
        if (tArray.length == 0){
            alert('판매 품목을 등록해 주세요');
            return;
        }

        $('#chartdiv').empty();
        let s1 = [];
        let ticks = [];

        for (i = 0; i< pArray.length; i++){
            ticks.push(pArray[i]["name"]);
            s1.push(0);
        }

        for (i = 0; i< tArray.length; i++){
            for(j = 0; j< pArray.length; j++){
                if(pArray[j]["name"] == tArray[i]["name"]){
                    s1[j] +=  tArray[i]["total"];
                    break;
                }
            }

        }
        plot1 = $.jqplot('chartdiv', [s1], {
            title: '판매 현황 그래프',
            seriesDefaults: {
                renderer:$.jqplot.BarRenderer,
                pointLabels: { show: true }
            },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ticks,
                    label: '품목명',
                    labelRenderer: $.jqplot.canvasTextRenderer
                },
                yaxis: {
                    labelRenderer: $.jqplot.canvasAxisLabelRenderer,
                    label: '판매액'
                }
            },
        });
    });


 });
