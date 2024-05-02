amigo = {nome: 'José', sexo: 'M', peso: 80.00, engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

