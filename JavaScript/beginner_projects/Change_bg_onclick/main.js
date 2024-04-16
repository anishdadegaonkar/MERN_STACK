let colours = ['blue','red','yellow','green','black','orange'];
let button = document.getElementById("button");

button.addEventListener('click',()=>{
    var randomcolor = colours[Math.floor(Math.random()*colours.length)];

    var container = document.getElementById("container");
    container.style.background = randomcolor;
})