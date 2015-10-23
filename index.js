var reader = new FileReader();
var xhr = new XMLHttpRequest();
var info;
var linklength = 30

xhr.open("GET","Info.txt", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        info = xhr.responseText.split(/[\n,]/g);
    }
}
xhr.send(null);

var links = [];

setTimeout(function addToDocument() {

    for(var i = 0; i < info.length; i = i + 2) {
        var pair = [info[i], info[i + 1]];
        links.push(pair);
    }
    
    links.splice(links.length - 1, 1)
    
    links.sort(function() {
        return .5 - Math.random();
    });

    for(var i = 0; i <= links.length - 1; i++) {
        var li = document.createElement("LI");
        var a = document.createElement("A");
        var span = document.createElement("SPAN");
        var text = document.createTextNode(links[i][0] + ": ");
        var preptext = links[i][1]
        console.log(text);
        if (preptext.length > linklength) {
            preptext = preptext.slice(0, linklength - 4) + "...";
        }
        var linktext = document.createTextNode(preptext);
        a.appendChild(linktext);
        a.href = links[i][1];
        a.target = "_blank";
        span.appendChild(text);
        li.appendChild(span);
        li.appendChild(a);
        document.getElementById("links").appendChild(li)
    }
}, 300)

document.getElementById("button").onclick = function() {
        random = Math.floor(Math.random() * ((links.length - 1) + 1));
        window.open(links[random])
}
