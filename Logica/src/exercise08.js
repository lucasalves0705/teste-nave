/* E8
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima todos os elementos em que a idade é menor que 30.

 */

function buscaPorIdadeMax(){
	let dados = [
	    {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
    	{id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
   		{id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
    	{id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ];
	var nome;

    for (var i = 0; i < dados.length; i++) {
    	if(dados[i].age < 30){
    		nome = dados[i].first_name;
		    var nome = document.createTextNode(dados[i].first_name +' '+ dados[i].last_name);
	    	var p = document.createElement('p');
	    	p.append(nome);
	    	document.getElementById('lblDivExibir').append(p);
    	}
    }
}
