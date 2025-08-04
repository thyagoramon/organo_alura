import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { MdModeEdit } from "react-icons/md";

import InputText from "../InputText"
import InputSelect from "../InputSelect"
import InputColor from "../InputColor"
import Button from "../Button"

import "./Form.css"

const Form = (props) => {
	//useStates dos inputs
	const [nome, setNome] = useState('')
	const [cargo, setCargo] = useState('')
	const [imagem, setImagem] = useState('')
	const [time, setTime] = useState('')

	//função submit novo usuário
	const formSubmit = (e) => {
		e.preventDefault()
		props.newUser({
			id: uuidv4(),
			nome,
			cargo,
			imagem,
			time,
			fav: false
		})
		
		//limpar inputs após envio
		setNome('')
		setCargo('')
		setImagem('')
		setTime('')
	}

	//componente
	return (
		<section className="form-section">
			<form className="form" onSubmit={formSubmit}>
				<h3>Preencha os dados para adicionar um novo colaborador</h3>
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
					placeholder="Informe o endereço da imagem (url)"
					required={false}
					value={imagem}
					hook={value => setImagem(value)}
				/>
				<div className="form-time">
					<InputSelect
						label="Time"
						id="time"
						items={props.teams}
						value={time}
						hook={value => setTime(value)}
					/>
					<button type="button" className="btn-time"><MdModeEdit /></button>
				</div>
				
				<Button>Novo usuário</Button>
			</form>
			
			{/* <form className="form" onSubmit={newTime}>
				<h3>Preencha os dados para criar um novo time</h3>
				<InputText
					label="Time"
					id="novoTime"
					placeholder="Digite o nome do time"
					required={true}
					value={nomeTime}
					hook={value => setNomeTime(value)}
				/>				
				<InputColor
					label="Cor:"
					id="cor"
					placeholder="Digite a cor do time"
					required={true}
					value={corTime}
					hook={value => setCorTime(value)}
				/>				
				<Button>Novo Time</Button>
			</form> */}
		</section>
	)
}

export default Form
