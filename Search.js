let Query;
let Video;
function SetQuery(){
  var Search = document.getElementById("SearchBar");
  Query = Search.value;
}
function GetQuery(){
  document.getElementById("ShowResultsFor").value = ("Results for: " + Query);
  Video = (Query + ".mp4");

  document.getElementById("Result2").src = ("Videos/" + Video);
  console.log(document.getElementById("Result2").src)
}

function reload(){
    var container = document.getElementById("div");
    var content = container.innerHTML;
    container.innerHTML= content; 
    
   //this line is to watch the result in console , you can remove it later	
    console.log("Refreshed"); 
}
