import { useState } from "react"
import InputText from "../InputText"
import InputColor from "../InputColor"
import Button from "../Button"
import './ModalNewTeam.css'

const ModalNewTeam = ({showModalNewTeam, setShowModalNewTeam}) => {
  
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('#ff9999')

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
    showModalNewTeam &&

    <div onClick={()=> setShowModalNewTeam(false)} className="backdrop">
      <form className="ModalNewTeam" onClick={(e) => e.stopPropagation()}>
        <h3>Preencha os dados para adicionar um novo time à lista</h3>
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
    </div>
  )
}

export default ModalNewTeam