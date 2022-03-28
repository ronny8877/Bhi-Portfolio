function myFunction(x) {
    x.classList.toggle("change");
  }


  
function OpenMenu(){

  if( MenuValue == 0){
    document.getElementById("BarMenu").style="display: block"
    console.log(MenuValue)
    MenuValue++
  }
  else
  {
    document.getElementById("BarMenu").style="display: hidden"
    console.log(MenuValue)
    MenuValue--
  }
};

   document.getElementById("Menu").addEventListener("click",OpenMenu)
   var MenuValue = 0;