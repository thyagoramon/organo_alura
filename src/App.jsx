import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [users, setUsers] = useState([])
  
  //função para adicionar novo 'user' ao array 'users'
  const addNewUser = (user) => {
    setUsers([...users, user])
      //isso atualiza o array 'users' adicionando 'user',
  }

  return (
    <>
      <Banner />
      <section className='section padding container'>
        <Form
          newUser={newUser => addNewUser(newUser)}
          teams={teams.map(time => time.nome)}
        />
      </section>
      <section className='section'>
        {teams.map(team => <Team
            nome={team.nome}
            key={team.nome}
            corPrimaria={team.corPrimaria}
            corSecundaria={team.corSecundaria}
            users={users.filter(user => user.time === team.nome)}
        />)}
      </section>
      <Footer dev='Thyago Ramon'/>
    </>
  )
}
