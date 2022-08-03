const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const fill = document.getElementById("fill");
const stroke = document.getElementById("stroke");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 5;
let isPainting = false;
let isFilling = false;

function startPainting(event){
    isPainting = true;
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMove(event){
    if (isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
}

function cancelPainting(event){
    isPainting = false;
    ctx.beginPath();
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
    color.value = event.target.value;
}

canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

color.addEventListener("change", onColorChange);