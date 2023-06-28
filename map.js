btnErie= document.getElementById("erie-btn")
btnWallenpaupack= document.getElementById("wallenpaupack-btn")
btnRaystown= document.getElementById("raystown-btn")
map=document.getElementById("map")
txt=document.getElementById("currLake")

function newMap(location){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if (location==="Erie")
    {
       
        txt.innerHTML="Current Lake: Lake Erie"
        map.src="https://www.openstreetmap.org/export/embed.html?bbox=-84.00695800781251%2C40.65147128144057%2C-78.51379394531251%2C43.52863784833001&amp;layer=mapnik&amp;marker=42.10637370579326%2C-81.2603759765625"
    }
    if (location==="Wallenpaupack")
    {
        txt.innerHTML="Current Lake: Lake Wallenpaupack"
        map.src=src="https://www.openstreetmap.org/export/embed.html?bbox=-75.34852981567384%2C41.36946592211104%2C-75.17686843872072%2C41.46035319887628&amp;layer=mapnik"
    }
    
    if (location==="Raystown Lake")
    {
        txt.innerHTML="Current Lake: Raystown Lake"
        map.src=src="https://www.openstreetmap.org/export/embed.html?bbox=-78.2878875732422%2C40.26590441926665%2C-77.94456481933595%2C40.45060475430765&amp;layer=mapnik"
    }
    
    
 
  
}
btnErie.addEventListener("click",newMap.bind(location,"Erie"))
btnWallenpaupack.addEventListener("click",newMap.bind(location,"Wallenpaupack"))
btnRaystown.addEventListener("click",newMap.bind(location,"Raystown Lake"))