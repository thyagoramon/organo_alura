import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; //criação de ids

import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'

import './index.css'

export default function App() {  
  //times
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

  //usuários
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
  
  //função adicionar novo usuário
  const addNewUser = (user) => {
    //impedir usuários repetidos
    const userName = user.nome.toLowerCase()
    const validacao = users.some((user) => user.nome.toLowerCase() === userName)
    
    if (validacao) {
      alert(`'${user.nome}' já está no organograma`)
    } else {
      setUsers([...users, user])
    }
  }
  
  //função para deletar usuário
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  
  //função para criar novo time
  const addNewTeam = (team) => {
    //impedir times repetidos
    const teamName = team.nome.toLowerCase()
    const validacao = teams.some((team) => team.nome.toLowerCase() === teamName)
  
    if (validacao) {
      alert(`'${team.nome}' já está na lista`)
    } else {
      setTeams([...teams, team])
      alert(`Time criado com sucesso, agora '${team.nome}' está disponível na opção 'Time' ao criar um novo usuário`)
    }
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
      <Footer dev='Thyago Ramon' link='https://github.com/thyagoramon'/>
    </>
  )
}
