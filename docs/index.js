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