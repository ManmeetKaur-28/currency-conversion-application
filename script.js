console.log("script is working")

const populate= async (value,currency)=>{
    let mystr=""
    url="https://api.currencyapi.com/v3/latest?apikey=cur_live_WI60ibX6e2FGnKdM0ui4VmVhbGbKkIuv9XhK2w18&base_currency="+currency
    let response= await fetch(url)
    let rjson= await response.json()
    document.querySelector(".output").style.display="block"

    for(let key of Object.keys(rjson["data"])){
        mystr+= `<tr>
                    <td>${key}</td>
                    <td>${rjson["data"][key]["code"]}</td>
                    <td>${(rjson["data"][key]["value"] * value).toFixed(2)}</td>
                </tr>`
    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML= mystr;

}

const btn= document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const value=parseInt(document.querySelector("input[name='quantity']").value);
    const currency=document.querySelector("select[name='currency']").value;
    populate(value,currency)

})

