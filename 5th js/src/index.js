const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

  const button = document.querySelector("button");
  const background = document.querySelector("body");

function changeColor() {
    let color1 = colors[Math.round(Math.random()*10)];
    let color2 = colors[Math.round(Math.random()*10)];

    if(color1 === color2){
        color2 = colors[Math.round(Math.random()*10)];
    }else{
        background.style.background = `linear-gradient(0.25turn, ${color1}, ${color2})`;
    }
}

button.addEventListener("click",changeColor);

