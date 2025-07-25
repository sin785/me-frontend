import React, {useState, useEffect} from 'react'


export default function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch(import.meta.env.VITE_API+'/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
        console.log(result)
      })
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
