function maiorDeTres(a, b, c){
    let maior = a
    if(b>maior){
        maior = b
    }else if(c>maior){
        maior = c
    }

    return maior
}

console.log(maiorDeTres(5, 9, 2));
console.log(maiorDeTres(-3, -7, -1));