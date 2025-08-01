import hexToRgba from 'hex-to-rgba'

import UserCard from '../UserCard'

import './Team.css'
import '@/index.css'

const Team = (props) => {
	return (
		props.users.length > 0 &&
			//renderização condicional
		
		<section className='team' style={{backgroundColor: hexToRgba(props.cor, 0.25)}}>
			<div className='team-colors'>
					<p>Cor do time: </p>
					<input
						onChange={e => props.editColor(e.target.value, props.id)}
						value={props.cor}
						type="color"
						className='team-color'
					/>
			</div>
			
			<h3 style={{borderColor: props.cor}}>{props.nome}</h3>
			
			<div className='team-list container'>
				{props.users.map(user => 
					<UserCard
						key={user.id}
						id={user.id}						
						nome={user.nome}
						cargo={user.cargo}
						imagem={user.imagem}
						cor={props.cor}
						aoDeletar={props.onDelete}
						fav={user.fav}
						onFav={props.onFav}
					/>
				)}
			</div>
		</section>
	)
}

export default Team
