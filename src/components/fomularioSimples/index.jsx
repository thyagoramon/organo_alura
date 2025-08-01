import { useState } from "react"

const FormularioSimples = () => {
	//useState
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	
	//função para pegar os dados
	const submit = (e) => {
		e.preventDefault()
		console.log('Nome: '+nome)
		console.log('E-mail: '+email)
	}

	return (
		<form onSubmit={submit}>
			<label htmlFor="nome">Nome: </label>
			<input
				type="text"
				required={true}
				value={nome}
				onChange={(e) => setNome(e.target.value)}
			/>
			<label htmlFor="email">E-mail: </label>
			<input
				type="email"
				required={true}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button type="submit">Enviar</button>
		</form>
	)
}

export default FormularioSimples
