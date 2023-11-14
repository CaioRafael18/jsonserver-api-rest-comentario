export const httpHelper = () => { 
	const customFetch = async (url, options = {}) => { // Função que recebe uma URL e opções, onde as opções são como métodos HTTP.
		const defaultMethod = "GET" // Define o metodo HTTP GET.
		const defaultHeaders = { // Define os cabeçalhos e tipo de conteúdo e aceitação como json.
			"Content-Type": "application/json",
			Accept: "application/json",
		}
		const controller = new AbortController() // Controlador para cancelar a requisição.
		options.signal = controller.signal

		options.method = options.method || defaultMethod // Define o método HTTP, Se não estiver definido, usa o método padrão.
		options.headers = options.headers // Define os cabeçalhos nas opções, Se já houver cabeçalhos definidos, junta-os com o cabeçalho padrão.
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders

		options.body = JSON.stringify(options.body) || false // Define o corpo da requisição para JSON, Se não houver corpo, define como falso.
		if (!options.body) delete options.body // Remove a propriedade body das opções se não houver corpo.

		setTimeout(() => {
			controller.abort() // Define um temporizador para cancelar a requisição após 3 segundos.
		}, 3000)

		try { // Tenta fazer a requisição
			const response = await fetch(url, options)
			return await response.json() // Retorna os dados JSON da resposta se for sucesso.
		} catch (err) { // Retorna um objeto de erro caso ocorra uma exceção.
			return err // Caso aconteça algum erro, irá informar uma mensagem de erro.
		}
	}

	const get = (url, options = {}) => customFetch(url, options) // Função get que recebe a função customFetch.

	const post = (url, options) => { // Função Post que configura o metodo POST como opção.
		options.method = "POST"
		return customFetch(url, options)
	}

	const put = (url, options) => { // Função put que configura o metodo PUT como opção.
		options.method = "PUT"
		return customFetch(url, options)
	}

	const del = (url, options) => { // Função del que configura o metodo DELETE como opção.
		options.method = "DELETE"
		return customFetch(url, options)
	}

	return { // Retorna as funções para serem utilizadas.
		get,
		post,
		put,
		del,
	}
}
