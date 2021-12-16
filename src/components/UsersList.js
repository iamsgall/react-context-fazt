import React, { useContext, useEffect } from 'react'
import UserContext from '../context/User/UserContext'

export default function UsersList() {
  const { users, getUsers, getProfile } = useContext(UserContext)

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='list-group h-100'>
      {users.map(user => (
        <a
          href='#!'
          key={user.id}
          className='list-group-item list-group-item-item d-flex flex-row justify-content-start'
          onClick={() => getProfile(user.id)}
        >
          <img
            src='user.avatar'
            className='img-fluid mr-4 rounded-circle'
            width='70'
            alt=''
          />
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  )
}
