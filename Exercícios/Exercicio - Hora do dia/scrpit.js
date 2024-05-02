function carregar(){
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    minutos = new Date()
    hora = data.getHours()
    min = minutos.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    
    if (hora >= 0 && hora < 12){
        img.src = 'Manhã.png'
        document.body.style.background = '#f2ce8e'
    } else if (hora >= 12 && hora < 18){
        img.src = 'Tarde.png'
        document.body.style.background = '#fb8602'
    } else {
        img.src = 'Noite.png'
        document.body.style.background = '#13233c'
    }
}