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

var links = [];

setTimeout(function addToDocument() {

    for(var i = 0; i < info.length; i = i + 2) {
        links.push([info[i], info[i+1]]);
    }
    links.sort(function() {
        return .5 - Math.random();
    });

    for(var i = links.length() - 1; i < 0; i++) {
        var li = document.createElement("LI");
        var a = document.createElement("A");
        var text = document.createTextNode(links[i][0] + ": ");
        var linktext = document.createTextNode(links[i][1]);
        a.appendChild(linktext);
        a.href = links[i][1];
        a.target = "_blank";
        li.appendChild(text);
        li.appendChild(a);
        document.getElementById("links").appendChild(li)


    }
}, 300)

document.getElementById("button").onclick = function() {
        random = Math.floor(Math.random() * ((links.length() - 1) + 1));
        console.log(random)
        window.open(links[random])
}
