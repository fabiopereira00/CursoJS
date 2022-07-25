function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 13){
        // BOM DIA
        img.innerHTML = '<img src = "fotomanha.png">'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 20){
        // BOA TARDE
        img.innerHTML = '<img src = "fototarde.png">'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        img.innerHTML = '<img src = "fotonoite.png">'
        document.body.style.background = '#515154'

    }
}
