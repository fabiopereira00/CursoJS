var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 13){
    console.log('Bom Dia!')
}else if (hora <=19){
    console.log('Boa Tarde!')
}else{
    console.log('Boa noite')
}