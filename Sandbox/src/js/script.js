const canvas = document.getElementById("sandbox");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(109, 100, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

let link = document.getElementById("link");
link.setAttribute("download", "MintyPaper.png");
link.setAttribute(
  "href",
  canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
);
link.click();
