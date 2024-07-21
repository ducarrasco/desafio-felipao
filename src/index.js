
// Se XP for menor do que 1000 = Ferro
// Se XP for entre 1001 e 2000 = Bronze  
// Se XP for entre 2001 e 5000 = Prata  
// Se XP for entre 5001 e 7000 = Ouro  
// Se XP for entre 7001 e 8000 = Platina  
// Se XP for entre 8001 e 9000 = Ascendente  
// Se XP for entre 9001 e 10000 = Imortal  
// Se XP for maior ou igual a 10001 = Radiante  


let heroi = ["carrasco", 90001] //heroi recebe o nome e o XP

if ( heroi[1] <= 1000 ){
  nivel = "Ferro"
} else if ( heroi[1] >= 1001  && heroi[1] <= 2000 ) {
    nivel = "Bronze"
} else if ( heroi[1] >= 2001  && heroi[1] <= 5000 ) {
  nivel = "Prata"
} else if ( heroi[1] >= 5001  && heroi[1] <= 7000 ) {
  nivel = "Ouro"
} else if ( heroi[1] >= 7001  && heroi[1] <= 8000 ) {
  nivel = "Platina"
} else if ( heroi[1] >= 8001  && heroi[1] <= 9000 ) {
  nivel = "Ascendente"
} else if ( heroi[1] >= 9001  && heroi[1] <= 10000 ) {
  nivel = "Imortal"
} else if  (heroi[1] >= 10001 ){
  nivel = "Radiante"
}

console.log("O heroi " + heroi[0] + " esta no nivel " + nivel + " com " + heroi[1] + " XP.")

// Nao entendi como usar estrutura de repetição neste projeto pois os valores sao fixos na variavel.