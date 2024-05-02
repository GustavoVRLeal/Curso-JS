h_atual = new Date()
min_atual = new Date()
hora = h_atual.getHours()
minuto = min_atual.getMinutes()
console.log(`Agora são ${hora} horas e ${minuto} minutos.`)
if (hora < 12){
    console.log('Bom dia')
} else if (hora <= 18){
    console.log('Boa tarde')
} else if (hora >= 19){
    console.log('Boa noite')
}