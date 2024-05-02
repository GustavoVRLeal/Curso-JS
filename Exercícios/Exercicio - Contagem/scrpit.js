function contar(){
    inicio1 = document.getElementById('txti')
    fim1 = document.getElementById('txtf')
    passo1 = document.getElementById('txtp')
    resultado = document.getElementById('res')

    if (inicio1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0){
        resultado.innerHTML = 'Impossivel contar!'
        window.alert('Insira os números nas caixinhas')

    } else{
        resultado.innerHTML = 'Contando: '
        i = Number(inicio1.value)
        f = Number(fim1.value)
        p = Number(passo1.value)
        c = i
        if (p <= 0){
            window.alert('Passo 0 invalido, considerando passo 1')
            p = 1
        }
        if (c < f){
            while (c <= f){
                resultado.innerHTML += `${c} \u{1F449}`
                c += p
            }
            resultado.innerHTML += `\u{1F3c1}`
        } else {
            while (c >= f){
                resultado.innerHTML += `${c} \u{1F449}`
                c -= p
            }
            resultado.innerHTML += `\u{1F3c1}`
        }
    }
}