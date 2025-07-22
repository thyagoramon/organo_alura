import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  //array dos times cadastrados
  const [teams, setTeams] = useState ([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e gestão',
      cor: '#FF8A29',
    },
  ])

  //array dos usuários cadastrados
  const [users, setUsers] = useState([
    {
			id: uuidv4(),
      nome: 'Thyago Ramon',
			cargo: 'Desenvolvedor front-end',
			imagem: 'http://github.com/thyagoramon.png',
			time: 'Front-end',
      fav: true
		},
  ])
  
  //função para adicionar novo 'user' ao array 'users'
  const addNewUser = (user) => {
    setUsers([...users, user])
    //isso atualiza o array 'users' adicionando 'user',
  }
  
  //função para deletar usuário
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  
  //função apra criar novo time
  const addNewTeam = (team) => {
    setTeams([...teams, team])
  }

  //função para alterar cor do time
  const teamColor = (cor, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.cor = cor
      }
      return team
    }))
  }

  //função para favoritar usuários
  const favoriting = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        user.fav = !user.fav
      }
      return user
    }))
  }

  return (
    <>
      <Banner />
      <section className='section padding container'>
        <Form
          newUser={newUser => addNewUser(newUser)}
          newTeam={newTeam => addNewTeam(newTeam)}
          teams={teams.map(time => time.nome)}
        />
      </section>
      <section className='section'>
        {teams.map(team =>
          <Team
            key={team.id}
            id={team.id}
            nome={team.nome}
            cor={team.cor}
            editColor={teamColor}
            users={users.filter(user => user.time === team.nome)}
            onDelete={deleteUser}
            onFav={favoriting}
          />
        )}
      </section>
      <Footer dev='Thyago Ramon'/>
    </>
  )
}
