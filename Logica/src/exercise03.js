/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

function subistituirPorOrdem(){
	const txt = 'T35t3 d3 35t4g1o',
		  chars = {'4':'a','3':'e','1':'i','5':'s'};
	txt = txt.replace(/[4315]/g, m => chars[m]);
	document.getElementById('txtOrdenado').innerHTML = txt;
};