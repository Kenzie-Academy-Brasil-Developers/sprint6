function isPalindrome(str){
    /* Seu código aqui */

str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

 str2 = str.split('').reverse().join('');

if  (str === str2){
return true
} else {
return false
}
    /* mensagem explicação : primeiro tirei os espaços e letras maiusculas para que ficassem juntos depois pesquisei formas de 
    colocar a string ao contrario depois so fiz comparar se str e str2 sao iguais */
}

function arrayMaxMin(arr){
    /* Seu código aqui */
let minimo = Infinity;
let maximo = -Infinity;

for (let i = 0; i < arr.length;i++) {
if (arr[i] < minimo) {
minimo = arr[i];
}

if (arr[i] > maximo){
maximo = arr[i];
}
}
return [minimo, maximo]

}

/* mensagem explicação basicamente adicionei duas varias uma infinity e outra infinity negativo porque se minimo e um valor infinity
quando arr for < que minimo ele deixara de ser infinity e passará a ser o valor minimo mesma logica usei no let maximo no final o return 
chama as duas variaveis com os valores menores e maiores
*/