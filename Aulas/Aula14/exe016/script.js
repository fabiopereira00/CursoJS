function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('[ERRO] Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++){
             let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }   
    }
}