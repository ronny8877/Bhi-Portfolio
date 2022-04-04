
function Menu(){
    
    if(display == 0){
       document.getElementById("NavigationList").style.display.visibility="hidden";
        display++;
        console.log("hidden")
    }
    else{
        document.getElementById("NavigationList").style.display.visibility="none";
        display--;
        console.log("none")
    }
}

document.getElementById("NavigationBar").addEventListener("click",Menu);
let display = 0;