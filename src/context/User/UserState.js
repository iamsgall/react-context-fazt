import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import API from '../../utils/API'

export default function UserState(props) {
  const initialState = {
    users: [],
    selectedUser: null,
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    const res = await API.get('users')
    dispatch({
      type: 'GET_USERS',
      payload: res.data.data,
    })
  }

  const getProfile = async id => {
    const res = await API.get(`users/${id}`)
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data.data,
    })
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
