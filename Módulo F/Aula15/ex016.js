let num = [3, 5, 8, 3, 6]

num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor possui ${num.length} posições.`)
console.log(`O segundo numero do vetor é ${num[1]}`)

pos = num.indexOf(4)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor foi encontrado na posição ${pos}`)
}
