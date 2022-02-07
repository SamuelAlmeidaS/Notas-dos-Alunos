// mostrar o nome - nota1 - nota2 - Aprovado ou reprovado

var alunos = ["Samuel", "Amanda", "Marcos", "Abrel", "Irineu"]
var notaA = [10, 6.7, 6.5, 8, 3]
var notaB = [5, 8, 4, 6, 3]


function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    if(media > 7){
        return "APROVADO!"
    }else{
        return "REPROVADO!"
    }
}
for(var index in alunos) {

    var nota1 = notaA[index]
    var nota2 = notaB[index]

    var m = media(nota1, nota2)
    console.log(alunos[index] +
        " - " +
        nota1 +
        " - " +
        nota2 +
        " - " +
        m + " - " 
        + passou(m))
}