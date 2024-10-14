
function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora < 12) {
        window.document.body.style.background = '#f3e85091'
        img.src = 'Imagens/manha.jpg'
    }else if(hora >= 12 && hora < 18){
        window.document.body.style.background = ''
        img.src = 'Imagens/tarde.jpg'
    }else if(hora>18){
        window.document.body.style.background = 'darkblue'
        img.src = 'noite.jpg'
    }
    
}
