var fresh=document.getElementById("fresh")
var salt= document.getElementById("salt")
var filterBtn=document.getElementById("filterBtn")
console.log(fresh)
function checked(){
    console.log("moo")
    let x = document.getElementsByClassName("fresh")
    let y = document.getElementsByClassName("salt")
    if (fresh.checked){
       
        for (i in x)
        {   
            if(x[i]!=undefined){
            x[i].style.display="block"
            }
        }
      } else {
        
        
        for (i in x)
        {   
            if(x[i]!=undefined){
                x[i].style.display="none"
            }
           
        }
      }

      if (salt.checked){
       
        for (p in y)
        {   
            if(y[p]!=undefined){
            y[p].style.display="block"
            }
        }
      } else {
        
        console.log("moo")
        for (p in y)
        {
            if(y[p]!=undefined){
            y[p].style.display="none"
            }
        }
      }

      
}

filterBtn.addEventListener("click",checked)