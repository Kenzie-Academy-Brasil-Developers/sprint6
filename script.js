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
}
