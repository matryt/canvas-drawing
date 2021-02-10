var moncanvas = document.getElementById('dessin');
var ctx = moncanvas.getContext('2d');
var en_dessin= false;
ctx.strokeStyle = "black"
ctx.lineWidth = 5;
moncanvas.onmousedown = function(e) {
    en_dessin = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.closePath();
};
moncanvas.onmousemove = function(e) {
    if(en_dessin) dessiner(e.offsetX, e.offsetY)
};
moncanvas.onmouseup = function() {
    en_dessin = false;
};
function dessiner(x, y) {
    ctx.lineTo(x, y);
    ctx.stroke();
};
function modifierCouleur(codeCouleur) {
    if (codeCouleur) ctx.strokeStyle = codeCouleur;
};

function effacer() {
    ctx.beginPath();
    ctx.clearRect(0, 0, moncanvas.width, moncanvas.height);
}

function changerEpaisseur(e) {
    ctx.lineWidth=e;
}