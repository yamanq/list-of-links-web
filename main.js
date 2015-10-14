var reader = new FileReader();
var xhr = new XMLHttpRequest();
var info;

xhr.open("GET","Info.txt", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        info = xhr.responseText.split(/[\n,]/g);
    }
}
xhr.send(null);

var descriptions = [];
var links = [];

setTimeout(function addToDocument() {

    for(var i = 0; i < info.length; i++) {
        if ((i % 2) == 0) {
            descriptions.push(info[i]);
        } else {
            links.push(info[i])
        }
    }

    for(var i = 0; i < links.length; i++) {
         var li = document.createElement("LI");
         var a = document.createElement("A");
         var text = document.createTextNode(descriptions[i] + ": ");
         var linktext = document.createTextNode(links[i]);
         a.appendChild(linktext);
         a.href = links[i];
         a.target = "_blank";
         li.appendChild(text);
         li.appendChild(a);
         document.getElementById("links").appendChild(li)
    }
}, 300)

document.getElementById("button").onclick = function() {
        random = Math.floor(Math.random() * ((links.length - 1) + 1));
        console.log(random)
        window.open(links[random])
}