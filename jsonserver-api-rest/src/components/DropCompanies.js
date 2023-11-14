// importando as bibliotecas, hooks  e componentes necessários.
import React, { useState, useEffect } from "react"
import { httpHelper } from "../helpers/httpHelper"

const DropCompanies = ({ companiesId, handleValue }) => {  // Declarando uma Arrow Function que recebe dois props.
	const [companies, setCompanies] = useState(null) // Armazenando a lista de empresas.
	const [company, setCompany] = useState(companiesId) // Armazenando o id de cada empresa.

	const url = "http://localhost:5000/companies" // Definindo a URL da API.
	const api = httpHelper() // Chamando a função para estar aplicando os metodos.

	useEffect(() => {
		api
			.get(url) // Pegando as informações .
			.then(res => {
				setCompanies([{ id: 0, name: "Select Company" }, ...res]) // Se sucesso vai estar Atualizando a lista de empresas.
			})
			.catch(err => console.log(err)) // Caso aconteça algum erro, irá informar uma mensagem de erro.
	}, [])

	if (!companies) return null // interrompe a renderização até que os dados dos usuários sejam carregados.

	return (
		<select // Cria uma caixa de seleção em HTML.
			name='companiesId' // Nome do campo.
			value={company} // Definindo como valor as empresas.
			onChange={e => { // Quando for alterado chama a arrow function que vai estar atualizando com o novo valor selecionado.
				setCompany(e.target.value)
				handleValue(e)
			}}
		>
			{companies.map(c => ( // Itera a lista de empresa e retorna como uma lista de opções.
				<option value={c.id} key={c.id}>
					{c.name}
				</option>
			))}
		</select>
	)
}

export default DropCompanies // Exporta o componente.
