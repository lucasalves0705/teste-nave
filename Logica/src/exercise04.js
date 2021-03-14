/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

function buscarCep(){
	let cep = document.getElementById('txtCep').value;
	fetch('https://viacep.com.br/ws/'+cep+'/json/')
	.then((response) => {
    	return response.json()
	}).then((data) => {
		let endereco = document.getElementById('txtEndereco').value;
	    document.getElementById('txtCidade').innerHTML = endereco + ', ' + data.localidade + '/' + data.uf;
	    console.log(data)
	})
	.catch(error => document.getElementById('txtCidade').innerHTML = 'Erro ao buscar o CEP');
}
