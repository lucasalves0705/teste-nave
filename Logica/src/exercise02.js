/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

function subistutirTexto(){
	var txt = document.getElementById('txtNaoAlterado').value;
	document.getElementById('txtAlterado').innerHTML = txt.replace(/[0-9]+/g,'$');
};