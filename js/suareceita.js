if(document.getElementById("checkbox").checked == false){
	document.getElementById("button").disabled = true
	document.getElementById("button").style = "background: gray;"
}else if(document.getElementById("checkbox").checked == true){
	document.getElementById("button").style = "background: #fdafda;"
}

document.getElementById("checkbox").addEventListener("change", () => {
	if(document.getElementById("checkbox").checked == false){
		document.getElementById("button").disabled = true
		document.getElementById("button").style = "background: gray"
	}else if(document.getElementById("checkbox").checked == true){
		document.getElementById("button").style = "background: #fdafda;"
		document.getElementById("button").disabled = false
	}
})

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
