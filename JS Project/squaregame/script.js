let one = document.querySelector('#one');
one.addEventListener('mouseenter', ()=>{
    let x = Math.floor(Math.random()*100);
    one.innerHTML = `<h1>${x}</h1>`;
});

one.addEventListener('dblclick', ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    one.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

one.addEventListener('mouseleave', ()=>{
    one.innerHTML = "<h1>1</h1>";
    one.style.backgroundColor = "white";
});

let two = document.getElementById('two');
let clr = "red";
two.addEventListener('mouseenter', ()=>{
    two.style.backgroundColor = clr;
    if(clr=="red") clr = "green";
    else if(clr=="green") clr = "blue";
    else clr = "red";
});

two.addEventListener('mouseleave', ()=>{
    two.style.backgroundColor = "white";
});

let three = document.getElementById('three');
three.addEventListener('mouseenter', ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    three.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

three.addEventListener('mouseleave', ()=>{
    three.style.backgroundColor = "white";
});

let four = document.getElementById('four');
four.addEventListener('click', ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    one.style.backgroundColor = `rgb(${r}, ${255}, ${255})`;
    two.style.backgroundColor = `rgb(${255}, ${g}, ${255})`;
    three.style.backgroundColor = `rgb(${255}, ${255}, ${b})`;
});

four.addEventListener('mouseleave', ()=>{
    one.style.backgroundColor = "white";
    two.style.backgroundColor = "white";
    three.style.backgroundColor = "white";
});

let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove", (dets)=>{
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});