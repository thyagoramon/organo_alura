import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import InputText from "../InputText"
import InputSelect from "../InputSelect"
import Button from "../Button"
import SimpleButton from "../SimpleButton";
import { useApp } from "@/context/useApp";

import "./Form.css"

const Form = () => {
	const {teams, setShowModalNewTeam, addNewUser} = useApp();

	//useStates dos inputs
	const [nome, setNome] = useState('')
	const [cargo, setCargo] = useState('')
	const [imagem, setImagem] = useState('')
	const [time, setTime] = useState('')

	//função submit novo usuário
	const formSubmit = (e) => {
		e.preventDefault()
		addNewUser({
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
						items={teams.map(time => time.nome)}
						value={time}
						hook={value => setTime(value)}
					/>
					<SimpleButton onClick={()=> setShowModalNewTeam(true)}><FaPlus /></SimpleButton>
					<SimpleButton><MdModeEdit /></SimpleButton>
				</div>
				
				<Button>Novo usuário</Button>
			</form>
		</section>
	)
}

export default Form
