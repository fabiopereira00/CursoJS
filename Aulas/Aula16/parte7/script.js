let num = document.querySelector('input#txtn')
let flista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(num.value) >= 1 && Number(num.value) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(Number(num.value)) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        flista.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('[ERRO] Dados inválidos ou já se encontram na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior){
            maior = valores[pos]
        }if (valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma / tot

    res.innerHTML = ''
    res.innerHTML += `<p>No total foram adicionados ${tot} valores`
    res.innerHTML += `<p>O maior valor da lista é ${maior}`
    res.innerHTML += `<p>O menor valor da lista é ${menor}`
    res.innerHTML += `<p>A soma de todos os valores da lista é ${soma}`
    res.innerHTML += `<p>A média dos valores da lista é ${media}`
}



