// importando as bibliotecas, hooks  e componentes necessários.
import React, { useState } from "react"
import DropComapies from "./DropCompanies"

const Form = ({ userData = {}, postUser, updateUser }) => { // Declarando uma Arrow Function.
	const [user, setUser] = useState({ // Representa os dados dos usuários.
		name: userData.name ?? "", 
		username: userData.username ?? "",
		email: userData.email ?? "",
		phone: userData.phone ?? "",
		companiesId: userData.companiesId ?? "0",
	})

	const handleValue = e => { // Arrow Function para atualizar o user. 
		setUser({ ...user, [e.target.name]: e.target.value }) // Mantem as propriedades existentes e atualizar apenas a propriedade correspondente ao nome.
	}

	const submitUser = e => {
		e.preventDefault() // evita a recarga da pagina padrão do navegador.

		if (user.companiesId === "0") return // Interrompe o processo o id da empresa for '0'.

		if (userData.id) {
			updateUser(userData.id, user) // Se já existir, atualiza o usuário.
		} else {
			postUser(user) // Se não, adiciona um novo usuário.
		}
	}

	return ( // Formulário em html com inputs para coletar as informações do usuário.
		<form onSubmit={submitUser} className='row'> 
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<DropComapies companiesId={user.companiesId} handleValue={handleValue} />
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
		</form> // no final tem um botão para estar adicionando(se ainda não existir) ou salvando(se já existir) as informações de um usuário.
	)
}

export default Form // Exporta o componente.
