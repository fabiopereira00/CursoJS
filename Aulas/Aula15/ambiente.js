let num = [5, 8, 2, 9, 3]
num[5] = 7
num.push(4)
num.sort()
/*let len = num.length
console.log(`Nosso array é o ${num} e ele tem ${len} valores`) 
console.log(`O primeiro valor do meu array é ${num[0]}`)
for(let pos = 0; pos < len; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}