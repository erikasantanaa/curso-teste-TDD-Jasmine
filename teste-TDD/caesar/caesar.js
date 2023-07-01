const caesar = function(caesar) {
    for( let i = 0; i > caesar.length; i++){
        return (caesar[i] - 25 + 1) % 26
    }
}

module.exports = caesar

/*
(A B C D E F G H I J K  L  M
0 1 2 3 4 5 6 7 8 9 10 11 12

N  O  P  Q  R  S  T  U  V  W  X  Y  Z
13 14 15 16 17 18 19 20 21 22 23 24 25)

5 + 7 = 26
formula: (codigoDaLetra + desloc) % tamDoAlfabeto
=> (codigoDaLetra + 7) % 26
---------------------------------
ASC: 65 , 90
usando o ASC: O A não seria 0 , seria 65.
((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto)
 
                -65          +desl     %tam        +65   
codigoASC => codigo0a25 => desloco => giro => codigoASC

*/