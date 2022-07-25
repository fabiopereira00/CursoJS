let num = document.querySelector('input#txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n.value) <= 1 && Number(n.value) <=100){
        return true
    }else{
        return false
     
}
}
function inLista(n,l){

}


function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){

    }else{
        window.alert('Valor inválido ou já se encontra na lista!')
    }
}