// importando as bibliotecas, hooks  e componentes necessários.
import React, { useState, useEffect } from "react"
import Form from "./Form"
import Table from "./Table"
import { httpHelper } from "../helpers/httpHelper"

const CrudUser = () => { // Declarando uma Arrow Function.
	const [users, setUsers] = useState(null)

	const url = "http://localhost:5000/users" // Definindo a URL da API
	const api = httpHelper() // Chamando a função para estar aplicando os metodos.

	useEffect(() => { // Pegando as informações dos usuários
		getUsers()
	}, [])

	const postUser = user => { // Requisição HTTP para adicionar um novo usuário.
		api
			.post(`${url}`, { body: user })
			.then(res => getUsers())// Se sucesso do processo, chama o getUsers para atualizar a lista de usuários.
			.catch(err => console.log(err)) // Caso aconteça algum erro, irá informar uma mensagem de erro.
	} 

	const updateUser = (id, user) => { // Requisição HTTP para atualizar um usuário já existente.
		api
			.put(`${url}/${id}`, { body: user })
			.then(res => getUsers())  // Se sucesso do processo, chama o getUsers para atualizar a lista de usuários.
			.catch(err => console.log(err)) // Caso aconteça algum erro, irá informar uma mensagem de erro.
	}

	const deleteUser = id => { // Requisição HTTP para deletar um usuário existente.
		api
			.del(`${url}/${id}`, {})
			.then(res => getUsers()) // Se sucesso do processo, chama o getUsers para atualizar a lista de usuários.
			.catch(err => console.log(err)) // Caso aconteça algum erro, irá informar uma mensagem de erro.
	}

	const getUsers = () => { // Pegando as informações dos usuários.
		api
			.get(`${url}?_expand=companies`) // Pegando os dados das empresas.
			.then(res => {
				setUsers(res) // Se sucesso, Atualiza com os novos dados obtidos. 
			})
			.catch(err => console.log(err)) // Caso aconteça algum erro, irá informar uma mensagem de erro.
	}

	if (!users) return null // interrompe a renderização até que os dados dos usuários sejam carregados.

	return (
		<>
			<h3>New user</h3> 
			<Form postUser={postUser} /> // Formulário para criar novos usuários.
			<div className='all-users'>
				<h3>All users</h3>
				<Table // Exibindo todos os usuários.
					users={users}
					setUsers={setUsers}
					postUser={postUser}
					updateUser={updateUser}
					deleteUser={deleteUser}
				/>
			</div>
		</>
	)
}

export default CrudUser ///Exporta o componente.
