
let body = document.querySelector("body");
let currMode = ["light", "orange", "red", "green", "violet", "indigo", "blue", "pink" ];
let currIndex = 0;
setInterval(() => {
    body.classList.remove(currMode[currIndex]);
    currIndex = (currIndex + 1) % currMode.length;
    body.classList.add(currMode[currIndex]);
   
},1000)
