function carregar(){
var msg = window.document.getElementById('msg')
var image = window.document.getElementById('foto')

var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
}
if (hora >= 0 && hora < 12){
    image.src = "amanhecer.png"
} else if (hora >= 12 && hora < 18){
    image.src = "entardecer.png"
} else {
    image.src = "anoitecer.png"
}
