function myFunction(x) {
    x.classList.toggle("change");
  }

function Menu(){
    
    if(display == 0){
        document.getElementById("NavigationList").style="visibility:visible";
        display++;
    }
    else{
        document.getElementById("NavigationList").style=" visibility:hidden";
        display--;
    }
}
document.getElementById("NavigationList").style=" visibility:hidden";
document.getElementById("navigationBar").addEventListener("click", Menu)
var display = 0;