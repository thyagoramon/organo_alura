import UserCard from '../UserCard'
import './Team.css'
import '@/index.css'

const Team = (props) => {
	return (
		props.users.length > 0 &&
		<section className='team' style={{backgroundColor: props.corSecundaria}}>
			<h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
			<div className='team-list container'>
				{props.users.map(user => 
					<UserCard
						nome={user.nome}
						cargo={user.cargo}
						imagem={user.imagem}
						key={user.nome}
						cor={props.corPrimaria}
					/>
				)}
			</div>
		</section>
	)
}

export default Team
