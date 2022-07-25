function contar(){
    let ini = document.getElementById('início')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados! Por favor tente novamente!')
    }else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('[ERRO] Valor de Passo inválido... Corrigindo para 1')
            p = 1
        }
        if (i > f){
            for (c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else {
            for (c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f6d1}`
    }
}