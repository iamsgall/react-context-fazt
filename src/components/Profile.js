import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

export default function Profile() {
  const { selectedUser } = useContext(UserContext)

  return (
    <>
      {selectedUser ? (
        <div className='card card-body text-center'>
          <img
            src={selectedUser.avatar}
            className='card-img-top rounded-circle m-auto img-fluid'
            style={{ width: 180 }}
            alt=''
          />
          <h5 className='pt-2'>email: {selectedUser.email}</h5>
        </div>
      ) : (
        <div>No user selected</div>
      )}
    </>
  )
}
