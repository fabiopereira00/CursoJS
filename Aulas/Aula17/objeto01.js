let amigo = {nome: 'José', 
sexo: 'M', 
idade: 65,
peso: 85.5, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(12.3)
console.log(`${amigo.nome} pesa ${amigo.peso}`)