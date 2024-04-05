//********************************** Exercícios *****************************/
//Crie 2 arrays: nome e sobrenomes
//Crie um terceiro array de NomesCompletos
//ao final, exiba os nomes completos no console com o forEach
//É necessário conter pelo menos 5 nomes
//Utilizar arrow functions
//Se necessário, utilize outros métodos de array

const nomes = ['Bruno', 'Ian', 'Euridice', 'Pedro', 'João']
const sobrenomes = ['Moura', 'Melo', 'Pereira', 'Nunes', 'Nicolas']

const NomesCompletos = [];

nomes.forEach( (nome, indice) => {
    const NomesCompleto = `${nome} ${sobrenomes [indice]}`;
    NomesCompletos.push(NomesCompleto);
    
})

NomesCompletos.forEach(NomesCompleto => {
    console.log(NomesCompleto);
})


//********************************* Exercício *********************************/

//Crie 2 Arrays nomes e sobrenomes
//const nomes = ['Bruno', 'Ian', 'Euridice', 'Pedro', 'João']
//const sobrenomes = ['Moura', 'Melo', 'Pereira', 'Nunes', 'Nicolas']

//Crie um terceiro array de nomes completo
//const NomesCompleto = nome.map((nome, sobrenomes) => {
//    return `${nome} ${sobrenomes[indice]}`
//});

//NomesCompleto.forEach((qualquerParametro) => {
//    console.log(qualquerParametro);
//});