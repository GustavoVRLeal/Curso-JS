num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
res = document.querySelector('div#res')
valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja adicionado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        total = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0
        for(pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior} e o menor é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} como resultado.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>` 
    }    
}