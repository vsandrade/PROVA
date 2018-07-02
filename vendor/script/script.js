var tableTitulares = document.querySelector('#tableTitulares tbody');
var tableReservas = document.querySelector('#tableReservas tbody');
var titulares = [];
var reservas = [];

carregarJogadores();
imprimirJogadores(titulares, tableTitulares);
imprimirJogadores(reservas, tableReservas);

function carregarJogadores() {
	titulares = [];
	reservas = [];
	for (var i = 0; i < jogadores.length; i++) {
		if(jogadores[i].titular){
			titulares.push(jogadores[i]);
		}
		else{
			reservas.push(jogadores[i]);
		}
	}	
}

function imprimirJogadores(times, tableBody) {
	for (var i = 0; i < times.length; i++) {
		tableBody.innerHTML += `<tr>
									<td>${times[i].nome}</td>
									<td>${times[i].posicao}</td>
				 				</tr>`		
	}
}