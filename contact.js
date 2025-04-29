var menu=document.getElementById("menubar");
var sidemenu=document.getElementById("side")
menu.addEventListener("click",function(){
    document.getElementById("list").style.right=0;
})
sidemenu.addEventListener("click",function(){
    document.getElementById("list").style.right="-50%"
})