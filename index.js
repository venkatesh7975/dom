let root = document.getElementById("root");
let h1 = document.createElement("h1");
h1.textContent = "hello";

root.appendChild(h1);

let btn = document.createElement("button");
btn.textContent = "click";
root.appendChild(btn);

let input = document.createElement("input");
root.appendChild(input);
document.createAttribute("placeholder");

btn.onclick = function () {
  alert("hello");
};
