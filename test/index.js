$(document).ready(function () {
    $('#table_id').DataTable();
});

var a_tag = document.getElementsByClassName("binhnt");
var price = document.getElementsByClassName("result");

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }
  
// console.log( getElementByXpath("//*[@id='coin']/tbody/tr[i]/td[7]").innerText );
author();
async function author(){
    let url = "http://localhost:5000/data";
    let result = await fetch(url, {
        method: 'get', 
        headers: new Headers({
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJpbmhudCIsImlhdCI6MTYzNDg3OTEzMH0.vHU7mdcdE_nYtAWC5KLiHGC6rzNecOWls-dON-c-8LE' 
        })
    });
    let jsonResult = await result.json();
    console.log(jsonResult);

}

for (const i in a_tag){
    address = a_tag[i].innerText;

    // console.log(address);
    // getPN();

    async function getPN() {
        let url = 'http://localhost:3000/'+address;
        let result = await fetch(url);
        let jsonResult = await result.json();
        // console.log(jsonResult.tokenPriceUSD);
        return price[i].innerHTML = jsonResult.tokenPriceUSD;
    }
}
