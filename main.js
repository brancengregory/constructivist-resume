var newbox = document.createElement("section");
var newdiv = document.createElement("div");
var newhead = document.createElement("h2");
newbox.appendChild(newdiv);
newdiv.appendChild(newhead);
newdiv.className = "section-title";
newhead.innerHTML = ("Test");
var test = document.body.children[1];
test.appendChild(newbox);
