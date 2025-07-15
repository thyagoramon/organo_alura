import InputText from "../InputText"
import "./Form.css"

export default function Form() {
	return (
		<form action="#" className="form">
			<h2>Preencha os dados para criar o card do colaborador.</h2>
			<InputText label="Nome" id="nome" placeholder="Digite o seu nome"/>
			<InputText label="Cargo" id="cargo" placeholder="Digite o seu cargo"/>
			<InputText label="Imagem" id="imagem" placeholder="Informe o endereço da imagem"/>
			<select id="time">
				<option value="programacao">Programação</option>
				<option value="front-end">Front-end</option>
				<option value="data science">Data Science</option>
				<option value="devops">Devops</option>
				<option value="ux e design">UX e Design</option>
				<option value="mobile">Mobile</option>
				<option value="inovacao e gestao">Inovacao e Gestao</option>
			</select>
			<button type="submit">Criar card</button>
		</form>
	)
}
