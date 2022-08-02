const canvas =document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width=800;
canvas.height=900;

ctx.arc(400,150,90,0,Math.PI*2);
ctx.fillRect(250,250,300,250);
ctx.fillRect(170,250,60,300);
ctx.fillRect(570,250,60,300);
ctx.fillRect(300,520,60,250);
ctx.fillRect(450,520,60,250);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="yellow";
ctx.arc(370,120,20,0,Math.PI);
ctx.arc(430,120,20,0,Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(400,155);
ctx.lineTo(370,200);
ctx.lineTo(430,200);
ctx.lineTo(400,155);
ctx.fillStyle="red";
ctx.fill();
