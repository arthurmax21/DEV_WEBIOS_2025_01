var numtabuada = 3


if (numtabuada == 2){
    for(let i = 0; i <= 10; i++){
        console.log(`${numtabuada} X ${i} = ${numtabuada * i}`)
    }


}else if(numtabuada == 3){
    let i = 0
    while(i <= 10){
        console.log(`${numtabuada} X ${i} = ${numtabuada * i}`)
        i++
    }
}else{
    console.log("Número incorreto!")
}
