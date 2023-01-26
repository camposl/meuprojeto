const estudantes = [
    {
        name:"Lucas",
        primeiraNota:10,
        segundaNota:7
    },
    {
        name:"Beatriz",
        primeiraNota:5,
        segundaNota:7
    },
    {
        name:"Carlos",
        primeiraNota:7,
        segundaNota:3
    }
]

function media(nota1, nota2) {
    let result = (nota1 + nota2) / 2
    return result
}

function printMedia(aluno){
    if(media(aluno.primeiraNota, aluno.segundaNota >= 7)){
        return(`A média da(o) aluna(o) ${aluno.name} é: ${media(aluno.primeiraNota, aluno.segundaNota)} \nParabéns, ${aluno.name}. Você foi aprovada(o) no curso! `)
    }else{
        return(`A média da(o) aluna(o) ${aluno.name} é: ${media(aluno.primeiraNota, aluno.segundaNota)} \nNão foi dessa vez, ${aluno.name}! Tente novamente! `)
    }
}
for(let estudante of estudantes){
    let estudanteMenssagem = printMedia(estudante)
    alert(estudanteMenssagem)
}

