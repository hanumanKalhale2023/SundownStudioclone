const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var a = document.querySelector("#elem1");
console.log(a);

var elemC=document.querySelector("#elem-container");
var fix=document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",function(){
    fix.style.display="block";
})

elemC.addEventListener("mouseleave",function(){
    fix.style.display="none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fix.style.backgroundImage= `url(${image})`
    })
})