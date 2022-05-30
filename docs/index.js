//Add meta tag dynamically.
var metaElement=document.createElement("meta");
var metaText=document.createAttribute("name");
metaText.value="viewport";
metaElement.setAttributeNode(metaText);
var metaText2=document.createAttribute("content");
metaText2.value="user-scalable=no";
metaElement.setAttributeNode(metaText2);
document.head.appendChild(metaElement);

//Load this page again if it hasn't "index.html".
if(document.location.href.indexOf("index.html")==-1){
window.location.href=document.location.href+"index.html";
}

//switch between two states,use with a button called "stateChange"
function stateChange(){
    if(document.getElementById("website").style.display=="none"){
        document.getElementById("website").style.display="";
        document.getElementById("stateText").innerHTML="切换为工具";
    }else{
        document.getElementById("website").style.display="none";
        document.getElementById("stateText").innerHTML="切换为网站";
    }
}