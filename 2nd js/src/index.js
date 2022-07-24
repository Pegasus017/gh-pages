const title = document.querySelector("body");
title.classList.add("done");
currentsize();

function currentsize() {
    let width = window.innerWidth;
  if (width < 600 || width === 600) {
    title.style.backgroundColor = "rgb(45,141,213)";
  } else if (width < 1000 && width > 600) {
    title.style.backgroundColor = "rgb(143,78,173)";
  } else {
    title.style.backgroundColor = "rgb(238,188,18)";
  }
}

function handleResize() {
  if (title.classList.contains("done")) {
    title.classList.remove("done");
    currentsize();
  } else {
    title.classList.add("done");
    currentsize();
  }
}

window.addEventListener("resize", handleResize);