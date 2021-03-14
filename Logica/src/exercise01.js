/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

function exercicio01() {
  var txt1 = document.getElementById('txt1').value;
  var txt2 = document.getElementById('txt2').value;
  var txtMaior = txt1 > txt2 ? 'Texto 1 maior com '+ txt1.length +' letras.' : 'Texto 2 maior com '+ txt2.length +' letras.';
  document.getElementById("maior").innerHTML = txtMaior;
};
