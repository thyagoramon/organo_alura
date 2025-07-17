import { useState } from 'react'
import Banner from '@/components/Banner/'
import Form from '@/components/Form/'

export default function App() {
  const [users, setUsers] = useState([])
  
  //função para adicionar novo 'user' ao array 'users'
  const addNewUser = (user) => {
    setUsers([...users, user])
      //isso atualiza o array 'users' adicionando 'user',
    console.table(users)
  }

  return (
    <>
      <Banner />
      <section>
        <Form
          newUser={newUser => addNewUser(newUser)}
        />
      </section>
    </>
  )
}
