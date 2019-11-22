import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      })
      console.log()
      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);


  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    })

    setUsers(users.filter(user => user._id !== id));
  }
  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    })

    setUsers(users.filter(user => user._id !== id));
  }

  //listar todos os usuarios
  return (
    <div className="main-container">
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <footer>
                <strong>{user.name}</strong>
                <span>{user.user}</span>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
          <div className="empty"> Acabou </div>
        )}
    </div>
  )
}
