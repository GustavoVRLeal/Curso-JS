
function par_impar(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(par_impar(4))



function fatorial(n){
    fat = 1
    for (c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))


function fatorial(n){
    if (n == 1){
        return 1
    } else{
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))