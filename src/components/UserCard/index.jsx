import './UserCard.css'

const UserCard = (props) => {
	return (
		<div className='userCard'>
			<div className='userCard-top' style={{backgroundColor: props.cor}}>
				<img src={props.imagem} alt={props.nome}/>
			</div>
			<div className='userCard-botton'>
				<h4>{props.nome}</h4>
				<h5>{props.cargo}</h5>
			</div>
		</div>
	)
}

export default UserCard
