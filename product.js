var menu=document.getElementById("menubar");
var sidemenu=document.getElementById("side")
menu.addEventListener("click",function(){
    document.getElementById("list").style.right=0;
})
sidemenu.addEventListener("click",function(){
    document.getElementById("list").style.right="-50%"
})
var search=document.getElementById("search");
var productList=document.getElementById("product-container");
var listItem=productList.querySelectorAll("div")
 search.addEventListener("keyup",function(){
    var eventvalue=event.target.value.toUpperCase();
for(count=0;count<listItem.length;count=count+1){
    var searchProduct=listItem[count].querySelector("h1").textContent.toUpperCase();
    console.log(searchProduct)
    if(searchProduct.indexOf(eventvalue)<0){
listItem[count].style.display="none"
    }
    else{
        listItem[count].style.display="block"
    }
}
 })