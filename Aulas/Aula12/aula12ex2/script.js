function verificar(){
    var data = new Date()
    var year = data.getFullYear()
    var ano = document.getElementById('ano')
    var res= document.getElementById('res')
    if (ano.value.length == 0 || ano.value > year){
        alert('[ERRO] Data de nascimento inválida! Tente novamente..')
    }else{
        var sex = document.getElementsByName('sexo')
        var idade = year - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if (idade <=3 ){
                // FOTO BB
                img.setAttribute('src', 'fotobbm.jpg')
            }else if(idade <12){
                // FOTO CRIANCA
                img.setAttribute('src','fotocriançam.jpg')
            }else if(idade <22){
                // FOTO JOVEM
                img.setAttribute('src', 'fotojovemm.jpg')
            }else if(idade <50){
                // FOTO ADULTO
                img.setAttribute('src','fotoadulto.jpg')
            }else{
                // FOTO IDOSO
                img.setAttribute('src','fotoidoso.jpg')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if (idade <=3){
                // FOTO BB
                img.setAttribute('src','fotobbf.jpg')
            }else if(idade <12){
                // FOTO CRIANCA
                img.setAttribute('src','fotocriançaf.jpg')
            }else if(idade <22){
                // FOTO JOVEM
                img.setAttribute('src','fotojovemf.jpg')
            }else if(idade <50){
                // FOTO ADULTO
                img.setAttribute('src','fotoadulta.jpg')
            }else{
                // FOTO IDOSA
                img.setAttribute('src','fotoidosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
        

    }
}


