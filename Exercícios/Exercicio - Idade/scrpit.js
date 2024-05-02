function verificar(){
    data = new Date()
    ano = data.getFullYear()
    ano_nas = document.getElementById('txtano')
    res = document.getElementById('res')

    if (ano_nas.value.lenght == 0  || ano_nas.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(ano_nas.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'Criança menino.png')
                
            } else if (idade < 21) {
                img.setAttribute('src', 'Homem jovem.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'Homem adulto.png')
 
            } else{
                img.setAttribute('src', 'Idoso.png')

            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'Criança menina.png')

            } else if (idade < 21) {
                img.setAttribute('src', 'Mulher jovem.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'Mulher adulta.png')
 
            } else{ 
                img.setAttribute('src', 'Idosa.png')

            }
        } 

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}