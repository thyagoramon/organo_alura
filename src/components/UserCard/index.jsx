import { IoMdCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import './UserCard.css'

const UserCard = (props) => {
	return (
		<div className='userCard'>
			<IoMdCloseCircle className='userCard-delete' onClick={() => props.aoDeletar(props.id)}/>
			<div className='userCard-top' style={{backgroundColor: props.cor}}>
				<img src={props.imagem} alt={props.nome}/>
			</div>
			<div className='userCard-botton'>
				<h4>{props.nome}</h4>
				<h5>{props.cargo}</h5>
				<div className="userCard-fav">
					{props.fav
						?	<IoIosHeart onClick={() => props.onFav(props.id)} className="fav-true"/>
						: <IoIosHeartEmpty onClick={() => props.onFav(props.id)} className="fav-false"
					/>}
				</div>
			</div>
		</div>
	)
}

export default UserCard
