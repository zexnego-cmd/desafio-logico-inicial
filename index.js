let soma = getRank(90, 50)
let rank

console.log("O heroi tem saldo de " + soma + " está no nivel de" + rank)

function getRank(n1, n2) {
    let resultado = n1 - n2
        return resultado
    let rank = resultado
        if (rank <= 10){
            rank = "Ferro"
        }else if (rank <= 20){
            rank = "Bronze"
        }else if (rank <= 50){
            rank = "Prata"
        }else if (resultado <= 80){
            posiRank = "Ouro"    
        }else if (resultado <= 90){
            posiRank = "Diamante"
        }else if (resultado <= 100){
            posiRank = "Lendario"
        }else {
            posiRank = "imortal"
        }
    
}

