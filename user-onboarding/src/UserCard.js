import React from 'react'

const UserCard = (props) => {
const {details} = props

    return (
        <div>
            <h1>Name: {details.name}</h1>
            <h2>Email: {details.email}</h2>
        </div>
    )
}

export default UserCard
