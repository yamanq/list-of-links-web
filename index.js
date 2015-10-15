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
    linklength = links.length
    randomlinks = links

    for(var i = linklength - 1; i < 0; i -= 1) {
        currentlink = Math.floor(Math.random() * (i + 1));
        var li = document.createElement("LI");
        var a = document.createElement("A");
        var text = document.createTextNode(descriptions[currentlink] + ": ");
        var linktext = document.createTextNode(randomlinks[currentlink]);
        a.appendChild(linktext);
        a.href = randomlinks[i];
        a.target = "_blank";
        li.appendChild(text);
        li.appendChild(a);
        document.getElementById("links").appendChild(li)
        randomlinks.splice(currentlink, 1)


    }
}, 300)

document.getElementById("button").onclick = function() {
        random = Math.floor(Math.random() * ((linklength - 1) + 1));
        console.log(random)
        window.open(links[random])
}
