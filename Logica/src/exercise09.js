/* E9
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Ordene o array de forma decrescente por idade,
em caso de empate o desempate é pelo id(em ordem crescente)

*/

function organizarIdade(){
	let dados = [
	    {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
    	{id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
   		{id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
    	{id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ];
    var aux;

    for (var i = 1; i < dados.length; i++) {
    	for (var j = 0; j < i; j++) {
    		if(dados[i].age > dados[j].age){
    			aux = dados[i];
    			dados[i] = dados[j];
    			dados[j] = aux;
    		}
    		if(dados[i].age == dados[j].age){
    			
    		}
    	}
    }

    console.log(dados);
}
