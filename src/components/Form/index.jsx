import { useState } from "react"
import InputText from "../InputText"
import InputSelect from "../InputSelect"
import Button from "../Button"
import "./Form.css"

const Form = (props) => {
	//useStates dos inputs
	const [nome, setNome] = useState('')
	const [cargo, setCargo] = useState('')
	const [imagem, setImagem] = useState('')
	const [time, setTime] = useState('')

	//função para pegar valores dos inputs
	const formSubmit = (e) => {
		e.preventDefault()
		props.newUser({
			nome,
			cargo,
			imagem,
			time
		})
		
		//limpar inputs após envio
		setNome('')
		setCargo('')
		setImagem('')
		setTime('')
	}

	//componente
	return (
		<form className="form" onSubmit={formSubmit}>
			<h3>Preencha os dados para criar o card do colaborador</h3>
			<InputText
				label="Nome"
				id="nome"
				placeholder="Digite o seu nome"
				required={true}
				value={nome}
				hook={value => setNome(value)}
			/>
			<InputText
				label="Cargo"
				id="cargo"
				placeholder="Digite o seu cargo"
				required={true}
				value={cargo}
				hook={value => setCargo(value)}
			/>
			<InputText
				label="Imagem"
				id="imagem"
				placeholder="Informe o endereço da imagem"
				required={false}
				value={imagem}
				hook={value => setImagem(value)}
			/>
			<InputSelect
				label="Time"
				id="time"
				items={props.teams}
				value={time}
				hook={value => setTime(value)}
			/>
			<Button>Criar Card</Button>
		</form>
	)
}

export default Form
