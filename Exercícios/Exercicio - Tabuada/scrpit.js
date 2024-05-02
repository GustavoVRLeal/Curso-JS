function tabuada(){
    num = document.getElementById('txtn')
    tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor, insira um número abaixo')

    } else {
        n = Number(num.value)
        tab.innerHTML = ''
        for (c=1; c <=10; c++){
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}