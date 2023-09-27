allproducts = document.querySelectorAll(".info h3")
div=document.querySelector("#content")
btn=document.querySelector("#btn")
totalprice= 0

allproducts.forEach(function (item) {
    item.onclick =function () {
       div.innerHTML += item.textContent  + "<br>"
    totalprice += +(item.getAttribute("price"))
    if (div.innerHTML !="") {
        btn.style.display = "block"
    }
}

})
btn.onclick=function () {
    document.getElementById("totalprice").innerHTML= (totalprice+"$")
}
    

    
