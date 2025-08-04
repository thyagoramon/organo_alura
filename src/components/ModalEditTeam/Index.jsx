import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ModalEditTeam = () => {
	const [nomeTime, setNomeTime] = useState('')
	const [corTime, setCorTime] = useState('#ff9999')

  //função submit novo time
	// const newTime = (e) => {
	// 	e.preventDefault()
	// 	newTeam({
	// 		id: uuidv4(),
	// 		nome: nomeTime,
	// 		cor: corTime
	// 	})
		
	// 	//limpar inputs após envio
	// 	setNomeTime('')
	// 	setCorTime('#ff9999')
	// }

  return (
    <form className="form" onSubmit={newTime}>
      <h3>Preencha os dados para criar um novo time</h3>
      <InputText
        label="Time"
        id="novoTime"
        placeholder="Digite o nome do time"
        required={true}
        value={nomeTime}
        hook={(value) => setNomeTime(value)}
      />
      <InputColor
        label="Cor:"
        id="cor"
        placeholder="Digite a cor do time"
        required={true}
        value={corTime}
        hook={(value) => setCorTime(value)}
      />
      <Button>Novo Time</Button>
    </form>
  )
};

export default ModalEditTeam
