function carregar(){
var msg = window.document.getElementById('msg')
var image = window.document.getElementById('foto')

var data = new Date()
var hora = data.getHours
msg.innerHTML = `Agora são ${hora} horas`
}
