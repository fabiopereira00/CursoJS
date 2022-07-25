/*let num = [6, 3, 9, 5 ,2]
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor tem ${num[0]} na primeira posição`)*/
/*let valores = [9,3,6,4,1,8]
valores.sort()
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let valores = [8,4,9,2,7]
valores.sort()
valores.push(1)
console.log(valores)
let pos = valores.indexOf(6)
if (pos == -1){
    console.log(`O valor nao foi encontrado.`)
}else{
    console.log(`O valor encontra-se na posição ${valores[pos]}`)
}