const nombre=document.getElementById("nombre")

nombre.addEventListener("mouseenter",()=>{
    nombre.classList.replace("black","red");
})
nombre.addEventListener("mouseleave",()=>{
    nombre.classList.replace("red","black");
})
