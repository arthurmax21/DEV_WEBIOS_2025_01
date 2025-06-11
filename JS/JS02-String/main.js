// "A" // Caracter 1
// "ola" // Texto - String

var texto1 = "Olá IOS"

var resultado1 = texto1.charAt(6)
console.log(resultado1)

var resultado2 = texto1[1]
console.log(resultado2)

var texto2 ="xadaskdoaskenjujefiajsdoaoasijdjansfafkdlksdlkfsldkflsdkflsdkflskdflskdflskdlfjgnfjxc,çlxc,vsmpojeinrjngnbxkcxlkcnjnrrpwoekkfoakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
console.log(texto2.length)
// console.log(texto2.length >= 500) 

var texto3 = "OLÁ TEC DE TECNOLOGIA"
var texto4 = "ola, meu nome é ia, seu amigo"

// Formato 2
// resultado3 = texto2.toLowerCase()
// console.log(resultado3)

console.log(texto3.toLowerCase())
console.log(texto4.toUpperCase())

var texto5 = "Mozilla"
// oz
console.log(texto5.substring(1,3))
console.log(texto5.substring(1))

var texto6 = "Bem vindo ao Microsoft"
let novaMensagem = texto6.replace('Microsoft', 'IOS')
console.log(novaMensagem)

// Remover os Espaços
// var texto7 = "             Olá  Alunos do IOS!!       "
// console.log(texto7.trim());

let textArea = "            Olá mundo, aprendendo JavaScript              "
console.log(textArea.trim())
// Ele só remove os espaços em branco ao inicio e ao final da String
