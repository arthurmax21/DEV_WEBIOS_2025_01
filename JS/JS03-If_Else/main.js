let atividadeEntregue = true
let diaFinalEntrega = 19
let mensagemParabens = "Parabéns"
if (atividadeEntregue == true){
    console.log(mensagemParabens)
    mesnagemParabéns = "" // Isso funcionaria no navegador, não mostrando o parabéns, caso a pessoa entregue fora da data 
    if(diaFinalEntrega <= 13){
        console.log("Entregue a atividade na data e sua nota é 10!")

    }else{
        console.log("Entregou a atividade fora do prazo previsto e serão retirados 2 pontos da nota final.")

    }
}else if(atividadeEntregue == false){
    console.log("Ops, você ainda não entregou sua atividade")

} else { // Resposta alternativa, quando os valores true or false nao foram preenchidos
    console.log("Você inseriu uma informação inválida!")
}


// var pontos = 200
// var mensagem1 = "Parabéns, você passou para a próxima fase!!"
// var mensagem2 = "Oh não, não foi dessa vez..."
// if (pontos >=1000) {
//     console.log(mensagem1)
// }
// else if ( pontos < 1000) {
//     console.log(mensagem2)
// }


