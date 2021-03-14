/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

 */

function buscaPorIdade(){
	let dados = [
	    {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
    	{id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
   		{id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
    	{id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ];
	var nome;

    for (var i = 0; i < dados.length; i++) {
    	if(dados[i].age < 25){
    		nome = dados[i].first_name +' '+ dados[i].last_name;
    		break;
    	}else{
    		nome = 'nenhum resultado foi encontrado!';
    	}
    }
    document.getElementById('lblBuscaPorIdade').innerHTML = nome;
}