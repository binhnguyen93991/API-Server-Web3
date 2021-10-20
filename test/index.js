$(document).ready(function () {
    $('#table_id').DataTable();
});

var a_tag = document.getElementsByClassName("binhnt");
var price = document.getElementsByClassName("result");

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  
// console.log( getElementByXpath("//*[@id='coin']/tbody/tr[i]/td[7]").innerText );

for (const i in a_tag){
    address = a_tag[i].innerText;

    // console.log(address);
    getPN();

    async function getPN() {
        let url = 'http://localhost:3000/'+address;
        let result = await fetch(url);
        let jsonResult = await result.json();
        // console.log(jsonResult.tokenPriceUSD);
        return price[i].innerHTML = jsonResult.tokenPriceUSD;
    }
}
