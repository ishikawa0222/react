import React, { useState } from 'react'

function ItemList(props) {
    const [users,setUsers] = useState(props.users)
    console.log(props)
    // var users = props.users;
    
    function onDeleteUser(id) {
        // TODO: APIでユーザ削除

        setUsers((current) => {
            return current.filter((user) => user.id !== id)
        })
    }
    
    
    return (
    <div>
      <h2>ユーザー一覧</h2>
      {users.map((user, index) => {
        return (
            <div key={index}>
                return (
                    {user.name}
                    <button onClick={() => onDeleteUser(index)}>削除</button>
                )
                
            </div>
        )
        })}
    </div>
  )
}

export default ItemList;
        