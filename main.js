const canv = document.getElementById('canvas');
const ctx = canv.getContext('2d');
function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fill();
}

function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
ctx.fillStyle = "#F07"
circle(100, 250, 15);








function draw(){
    

    requestAnimationFrame(draw);
}
draw();