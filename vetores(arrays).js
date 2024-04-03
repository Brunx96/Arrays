//Arrays são como caixas com outras caixas dentro, que podem ser acessados através do seu índice entre colchetes []. O primeiro índice sempre começa do 0, portanto um array de 4 posições terá o índice de 0 a 3.

//O array é heterogenio, ou seja, podemos colocar qualquer valor dentro dele, ou seja, tipos de dados diferentes. Int, String, double, number, booleam...

//Realizando a criação de um array:

const arr = []

arr.push("Qualquer coisa")
arr.push("Girafa")

console.log(arr.length);

//********************************Método 01 - Push **************************/
//Permite adicionar valores no final do array!
const pushArray = ['Leão', 'Tartaruga', 'Papagaio']
console.log(pushArray);
//    índice = 0 1 2 3 4
const teste = "t e s t e"

//*********************************Método 02 - Pop **************************/
//Pop remove o último valor de um determinado array
const popArray = ["fernando", "Mara", "Eric", "Gabriel"]
console.log(popArray)

//Elimina o último array
popArray.pop()
//Remove o primeiro valor de um array
popArray.shift()

//******************************** Método 03 - Splice ***********************/
//Permite selecionar um índice, adicionar e remover valores (substituição) 
const spliceArray = ['jan', 'fev', 'abr', 'jun']
console.log(spliceArray);

spliceArray.splice(0, 0, "meses:")
spliceArray.splice(1, 1)

console.log(spliceArray);

//******************************** Método 04 - Filter ***********************/

const filterArray = [ 1, 80, 2, 20, 30, 100, 93729]
console.log(filterArray);

const novoArray = filterArray.filter((qualquerCoisa) => {

    return qualquerCoisa > 10

} )

console.log(novoArray);

//********************************* Métedo 05 - Map **************************/
// Map não modifica o array original, somente a função de callback poderá fazer isso! Ou seja, ela criará um novo array modificado
//       Índice = 0 1 2 3 4 
const arrayMap = [1,2,3,4,5]

const arrayModificado = arrayMap.map(() => {
    return multiplicador * 2
})

//********************************* Método 06 - ForEach **********************/

const foreachArray = ['Carlos', 'Andre', 'Julia', 'Akira']

foreachArray.forEach( (nome) => {
    console.log(nome);
} )