let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("senha");

function criarCadastro() {
	function validarSenha(senha) {
		// Requisitos da senha
		const requisitos = {
			tamanhoMinimo: /.{8,}/, // Pelo menos 8 caracteres
			numeros: /\d/, // Pelo menos um número
			letrasMaiusculas: /[A-Z]/, // Pelo menos uma letra maiúscula
			letrasMinusculas: /[a-z]/, // Pelo menos uma letra minúscula
			caracteresEspeciais: /[!@#$%^&*(),.?":{}|<>]/, // Pelo menos um caractere especial
		};

		// Verificar cada requisito
		const resultados = {
			tamanhoMinimo: requisitos.tamanhoMinimo.test(senha),
			numeros: requisitos.numeros.test(senha),
			letrasMaiusculas: requisitos.letrasMaiusculas.test(senha),
			letrasMinusculas: requisitos.letrasMinusculas.test(senha),
			caracteresEspeciais: requisitos.caracteresEspeciais.test(senha),
		};

		// Mensagem para cada falha
		const mensagensErro = {
			tamanhoMinimo: "A senha deve ter no mínimo 8 caracteres.",
			numeros: "A senha deve conter pelo menos um número.",
			letrasMaiusculas: "A senha deve conter pelo menos uma letra maiúscula.",
			letrasMinusculas: "A senha deve conter pelo menos uma letra minúscula.",
			caracteresEspeciais:
				"A senha deve conter pelo menos um caractere especial (!, @, #, etc.).",
		};

		// Gerar lista de erros
		const erros = Object.keys(resultados)
			.filter((chave) => !resultados[chave])
			.map((chave) => mensagensErro[chave]);

		// Retornar resultado
		return {
			valido: erros.length === 0,
			erros,
		};
	}

	const resultado = validarSenha(senha.value);

	if (resultado.valido) {
		alert(
			`usuário criado!!\n nome: ${nome.value}\n e-mail: ${email.value}\nSeja muito bem vindo(a)!!!`
		);
	} else {
		alert("A senha não é válida.");
		resultado.erros.forEach((erro) => console.log(`${erro}`));
	}
}
