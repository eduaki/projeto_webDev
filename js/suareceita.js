function enviarreceita(event) {
	event.preventDefault();
	let titulo = document.getElementById("titulo").value;
	let ingredientes = document.getElementById("ingredientes").value;
	let modopreparo = document.getElementById("modopreparo").value;

	document.getElementById("titulo_texto").innerText = titulo;
	document.getElementById("ingredientes_texto").innerText = ingredientes;
	document.getElementById("modopreparo_texto").innerText = modopreparo;

	document.getElementById("receitapronta").style.display = "flex";
}

function confirma() {
	alert(
		`Receita de ${
			document.getElementById("titulo").value
		} adicionada com sucesso!`
	);
}
