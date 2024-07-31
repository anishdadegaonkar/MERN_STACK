import React from 'react'
import UserList from './UserList'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './UserDetails'

const UserAll = () => {
  return (
    <div>
      <UserList/>
      <Routes>
        <Route path ='/UserDetails/:id' element ={<UserDetails/>}/>
      </Routes>
    </div>
  )
}

export default UserAll