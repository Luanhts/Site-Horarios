function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')

var data = new Date()
//var hora = data.getHours()
var hora = 18;
msg.innerHTML = `Agora são ${hora} horas`
}
if (hora >= 0 && hora < 12){
    img.src = "amanhecer.png"
} else if (hora >= 12 && hora <= 18){
    img.src = "entardecer.png"
} else {
    img.src = "anoitecer.png"
}
