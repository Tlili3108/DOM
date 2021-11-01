const heart= document.getElementsByClassName("fa-heart")
for (let i = 0; i < heart.length; i++) {
   heart[i].addEventListener("click", like)
    
}
function like(event){ 
var blackheart = event.target
if (blackheart.style.color!== "red") {
    blackheart.style.color="red"
    
}
else 
{
    blackheart.style.color="black"
}

}

//---------------------------

const arrayPrices = [45, 15, 25]


const qte= document.getElementsByClassName("qte")
const price = document.getElementsByClassName("price")

for (var j = 0; j < qte.length; j++) {
    qte[j].addEventListener("change", updateprice)
    
}
function updateprice(event )
{
    var quantité = event.target
    var prix = quantité.previousSibling.previousSibling
var currentUnitIndex
    const itemTitle = prix.previousSibling.previousSibling.innerText
    switch (itemTitle)
    {
    
      case "Pilot Aviator Glasses" : currentUnitIndex =  0; break;
      case "Command Hats" : currentUnitIndex =  1; break;
      case "Mission T-Shirts" : currentUnitIndex =  2; break;
      default:
    }
    
    prix.innerText = "$"+ (quantité.value*arrayPrices[currentUnitIndex]).toFixed(2)

    updatetotalprice()    



}


//-----------------------

const BTN= document.getElementsByClassName("btnDel")
for (let i = 0; i < BTN.length; i++) {
    BTN[i].addEventListener("click", removeitems)


    }
    function removeitems (event)
    {
        var delbtn = event.target 
      delbtn.parentNode.parentNode.remove()
      updatetotalprice()
    
    }

    function updatetotalprice ()
    {
        var tprice = document.getElementById("Tprice")
totalprice = 0
for (let i = 0; i < price.length; i++) {
  totalprice = totalprice + Number(price[i].innerText.replace("$","")) 
}  
  tprice.value= "$"+ totalprice.toFixed(2)
    }




