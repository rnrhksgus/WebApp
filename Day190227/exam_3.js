// items
let items = [ { name: "tv", price: 5000, number: 0, total: 0 },
              { name: "vtr", price: 25000, number: 0, total: 0 },
              { name: "camera", price: 1500, number: 0, total: 0 },
              { name: "computer", price: 3000, number: 0, total: 0 },
              { name: "keboard", price: 1000, number: 0, total: 0 } ];

function sales_num(name, number){
    let index = items.findIndex( o => o.name === name);
    items[index]["number"] = number;
    items[index]["total"] = items[index]["number"] * items[index]["price"];
}

function sales_chart(arr){
    console.log(`\t\t<<< 판매 현황표(입력순) >>>`);
    console.log(`품목명\t\t단가\t\t판매수량\t판매금액`);
    let total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += items[i]["price"];
        console.log(`${items[i].name}      \t${items[i].price}\t\t${items[i].number}\t\t${items[i].total}\t`);
    }
    console.log(`\t\t\t\t총 매출액:\t${total}`);
    console.log(`\t\t<<< 판매 현황표(품목순) >>>`);
    console.log(`품목명\t\t단가\t\t판매수량\t판매금액`);
    let item_arr = arr.slice().sort( (a, b) => a.name > b.name);
    for (var i = 0; i < item_arr.length; i++) {
        console.log(`${item_arr[i].name}      \t${item_arr[i].price}\t\t${item_arr[i].number}\t\t${item_arr[i].total}\t`);
    }
    let price_arr = arr.slice().sort( (a, b) => b.total > a.total);
    console.log(`\t\t\t\t총 매출액:\t${total}`);
    console.log(`\t\t<<< 판매 현황표(판매금액순) >>>`);
    console.log(`품목명\t\t단가\t\t판매수량\t판매금액`);
    for (var i = 0; i < price_arr.length; i++) {
        console.log(`${price_arr[i].name}      \t${price_arr[i].price}\t\t${price_arr[i].number}\t\t${price_arr[i].total}\t`);
    }
    console.log(`\t\t\t\t총 매출액:\t${total}`);
}

sales_num("tv", 5);
sales_num("vtr", 2);
sales_num("camera", 3);
sales_num("computer", 2);
sales_num("keboard", 7);

sales_chart(items);
console.log(items);

console.log("------------------------------------------------------------------");

let item = [{name:"tv",price:5000,sell:5}, {name:"vtr",price:2500,sell:2}, {name:"camera",price:1500,sell:3},
            {name:"computer",price:4000,sell:6}, {name:"keyboard",price:1000,sell:4}];

function sellprice(item){
  for(items of item){
    items.sellprice = items.price*items.sell;
  }
}
function showNormal(item){
  console.log("        <<<판매 현황표(입력순)>>>      ");
  console.log("품목명           단가     판매수량     판매금액");
  for(items of item){
    console.log(`${items.name}      \t${items.price}        \t${items.sell}   \t${items.sellprice}`);
  }
}
function showName(item){
  item.sort((a, b) => a.name > b.name);
  console.log("        <<<판매 현황표(품목순)>>>      ");
  console.log("품목명           단가     판매수량     판매금액");
  for(items of item){
    console.log(`${items.name}      \t${items.price}        \t${items.sell}   \t${items.sellprice}`);
  }
}
function showSellprice(item){
  item.sort((a, b) => a.sellprice < b.sellprice);
  console.log("        <<<판매 현황표(판매금액순)>>>      ");
  console.log("품목명           단가     판매수량     판매금액");
  for(items of item){
    console.log(`${items.name}      \t${items.price}        \t${items.sell}   \t${items.sellprice}`);
  }
}
sellprice(item);
showNormal(item);
showName(item);
showSellprice(item);
