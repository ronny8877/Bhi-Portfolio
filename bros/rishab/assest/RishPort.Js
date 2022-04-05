function myFunction(x) {
    x.classList.toggle("change");
  }
  
function OpenMenu(){

  if( MenuValue == 0){
    document.getElementById("BarMenu").style="display: block"
    MenuValue++
    
  }
  else
  {
    document.getElementById("BarMenu").style="display: hidden"
    MenuValue--
    
  }
}

   document.getElementById("Menu").addEventListener("click",OpenMenu)
   var MenuValue = 0;

   document.getElementById("Submit").addEventListener("click",Submit)
  function Submit(){
    alert("mail sent");
  }