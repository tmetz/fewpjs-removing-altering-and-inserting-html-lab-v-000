// Write your code here!

let mainEl = document.getElementById("main#main");
mainEl.remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);
newHeader.innerHTML = "YOUR-NAME is the champion";
