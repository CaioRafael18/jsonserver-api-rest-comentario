// importando as bibliotecas e componente necessário.
import React from "react"
import Form from "./Form"

const Table = ({ users, postUser, updateUser, deleteUser }) => { // Declarando uma Arrow Function.
	const showUpdateUser = id => { // Controla a exibição do formulario.
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ user }) => { // Dependendo do id do usuário, Exibe informações sobre o usuário, tendo no final 2 botões, 1 de atualizar e um de excluir o usuário.
		return (
			<>
				<div className='row'>
					<div>{user.name}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div>{user.companies.name}</div>
					<div className='buttons'>
						<button onClick={() => showUpdateUser(user.id)}>Update</button> 
						<button onClick={() => deleteUser(user.id)}>Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user} postUser={postUser} updateUser={updateUser} />
				</div>
			</>
		) 
	}
	/// Uma estrutura de tabela em html tendo as colunas "Name", "Email", "Phone", "Company" e "Actions".
	return (
		<div className='table'>
			<div className='titles'>
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Company</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)}
			</div>
		</div>
	) // Usando no final o map para estar iterando o array users nas colunas.
}

export default Table ///Exporta o componente.
