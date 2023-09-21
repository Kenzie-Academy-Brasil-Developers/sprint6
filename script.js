function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    let a = 0;
    let b = str.length - 1;
  
    for (; a < b; a++, b--) {

      if (str[a] !== str[b]) {
        return false;
      }
    } return true;
  }
  
  function arrayMaxMin(arr) {
    let minimo = Infinity;
    let maximo = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minimo) {
        minimo = arr[i];
      }
  
  if (arr[i] > maximo) {
    maximo = arr[i];
  }
  }
  
  return [minimo, maximo];
  }