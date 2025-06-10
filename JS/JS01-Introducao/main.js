var idade
console.log("Olá mundo!") // Apresentar uma mensagem
console.clear() // Limpar a tela de saída
// 10 número inteiro
// 3.14 número de ponto flutuante

// Variáveis:
var numero_1 = 192 // Inicializar uma variável (dar logo de cara o valor a variável)
console.log(numero_1)

var num1 = 4
var num2 = 4
var resultado = num1 + num2
console.log(resultado)

idade = 89 // Iniciar a variável em outra parte do código
console.log(idade)

// Textos - Strings
var nome = "Matue"
var nome2 = 'Tuê'
var nome3 = '129312.39308' // será lido como texto
console.log(nome, nome2, nome3) // Apresenta tudo num 'log' só

// VAR // Flexível e com menos regras, posso alterar o valor inicial de uma 'var' e recriá-la em outras partes do código)

// LET // Não pode recriar a mesma em outras partes do código com o mesmo nome, mas pode chamar e alterar o seu valor inicial)
 
// CONST // Não pode recriar a mesma em outras partes do código e não pode alterar o valor inicial, garantindo a confiança do dado que está sendo inserido, ao decorrer do código(garantindo que você perca o valor incial ao decorrer do código)

// Template String, sendo também uma das formas de concatenar:

console.log(`Aluno  ${nome}  e aluno ${nome2} Tem um total de ${nome3}  dinheiros`)

console.log("Olá " + "tudo bem?") // Concatenar strings
console.log("Aluno " + nome + "e Aluno " + nome2 + " Tem um total de " + nome3 + " dinheiro ") // Concatenar também xdd

console.log(10/0)
console.log (-6 / 0)

// Operadores Aritméticos

var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2) // Exponenciação

// Operadores relacionais

console.log( 5 == 5)
console.log( 5 > 5)
console.log( 22 < 8)
console.log( 22 >= 22)
console.log( 22 != 23)
console.log( 'Ana' == 'ana')
console.log(true == false)
console.log(true === true)
console.log(true === 'true') // boolean e o outro é uma string
console.log(true != 'false') // true


let tem_camisa = false
let tem_cracha = true
console.log(tem_camisa);
console.log(tem_cracha);
console.log(tem_camisa == true && tem_cracha == true) //Operador lógico "and" que é inflexível (tudo tem que ser "true")
console.log(tem_camisa == true || tem_cracha == true) // Operador lógico or, que é flexível, precisando apenas um ser "true"
console.log(!(tem_camisa == true || tem_cracha == true))

// Operadores  de atribuição
var x = 3
var y = 2
x = x + y

// x+= y formato contraído
// x = 3 + 2
console.log(x)

x= 720
console.log(x)

// Log serve para mostrar resultados, mensagens do sistema

// clear serve para limpar o console e deixar disponivel para novas mensagens

console.clear()

console.log("Está tudo limpo")
console.log("Olá, mundo!")

console.error("Não, apenas pare, agora!")

console.warn("Mas apresenta uma mensagem em amarelo (cuidado)")