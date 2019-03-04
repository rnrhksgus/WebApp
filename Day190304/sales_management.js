function input_product(){
    var product_name = document.product.product_name;
    var product_price = document.product.product_price;
    product_add_row(product_name, product_price);
    document.product.product_name.value = '';
    document.product.product_price.value = '';
}

function product_add_row(product_name, product_price){
    var my_tbody = document.getElementById('productTable');
    var row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = product_name.value;
    cell2.innerHTML = product_price.value;
}

function input_sales(){
    var product_name = document.sales.product_name;
    var table = document.getElementById("productTable");
    alert(table.querySelector.innerHTML);
    var product_price = document.sales.product_num;
    var product_num = document.sales.product_num;
    sales_add_row(product_name, product_price, product_num);
    document.sales.product_name.value = '';
    document.sales.product_num.value = '';
    sortTable_1();
    sortTable_2();
}

function sales_add_row(product_name, product_price, product_num){
    var my_tbody = document.getElementById('sortTable1');
    var row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = product_name.value;
    cell2.innerHTML = product_price.value;
    cell3.innerHTML = product_num.value;
    cell4.innerHTML = (Number(product_price.value) * Number(product_num.value));

    my_tbody = document.getElementById('sortTable2');
    row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell1.innerHTML = product_name.value;
    cell2.innerHTML = product_price.value;
    cell3.innerHTML = product_num.value;
    cell4.innerHTML = (Number(product_price.value) * Number(product_num.value));

    my_tbody = document.getElementById('sortTable3');
    row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell1.innerHTML = product_name.value;
    cell2.innerHTML = product_price.value;
    cell3.innerHTML = product_num.value;
    cell4.innerHTML = (Number(product_price.value) * Number(product_num.value));
}

function sortTable_1() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("sortTable1");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML > y.innerHTML) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTable_2() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("sortTable2");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[3];
            y = rows[i + 1].getElementsByTagName("td")[3];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function tableDisplay(){
    if(document.sortScore.sort[0].checked){
        document.getElementById('sortTable1').style.display = 'table';
        document.getElementById('sortTable2').style.display = 'none';
        document.getElementById('sortTable3').style.display = 'none';
    }
    if(document.sortScore.sort[1].checked){
        document.getElementById('sortTable1').style.display = 'none';
        document.getElementById('sortTable2').style.display = 'table';
        document.getElementById('sortTable3').style.display = 'none';
    }
    if(document.sortScore.sort[2].checked){
        document.getElementById('sortTable1').style.display = 'none';
        document.getElementById('sortTable2').style.display = 'none';
        document.getElementById('sortTable3').style.display = 'table';
    }
}

function searchProduct() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    if(document.sortScore.sort[0].checked){
        table = document.getElementById("sortTable1");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if(document.sortScore.sort[1].checked){
        table = document.getElementById("sortTable2");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if(document.sortScore.sort[2].checked){
        table = document.getElementById("sortTable3");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}
