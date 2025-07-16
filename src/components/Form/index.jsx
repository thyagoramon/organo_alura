import InputText from "../InputText"
import InputSelection from "../InputSelection"
import Button from "../Button"
import "./Form.css"

const Form = () => {
	const teams = [
		'Programação',
		'Front-end',
		'Data Science',
		'Devops',
		'UX e Design',
		'Mobile',
		'Inovação e gestão'
	]

	const formSubmit = (e) => {
		e.preventDefault()
		console.log('form sended')
	}

	return (
		<form className="form" onSubmit={formSubmit}>
			<h2>Preencha os dados para criar o card do colaborador</h2>
			<InputText
				label="Nome"
				id="nome"
				placeholder="Digite o seu nome"
				required={true}
			/>
			<InputText
				label="Cargo"
				id="cargo"
				placeholder="Digite o seu cargo"
				required={true}
			/>
			<InputText
				label="Imagem"
				id="imagem"
				placeholder="Informe o endereço da imagem"
				required={false}
			/>
			<InputSelection
				label="Time"
				id="time"
				items={teams}
			/>
			<Button>Criar Card</Button>
		</form>
	)
}

export default Form
