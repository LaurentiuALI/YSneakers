import { useState, useEffect } from 'react';
import axios from 'axios';
import './account.css';

const AccountPage = () => {
  const [user, setUser] = useState({});
  const [newEmail, setNewEmail] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [message, setMessage] = useState('');

  const url = 'http://localhost:8000/auth/users/me';
  const token = JSON.parse(sessionStorage.getItem('user'));


  useEffect(() => {
    const getUser = () => {
      axios

        .get(`${url}`, {
          headers: {
            Authorization: `JWT ${token.access}`
          }
        })

        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);

  return (
    <div className='container-account'>
      <div>
        <div className='profile-info'>
          <h1>My Account</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Phone: {user.phone}</p>
        </div>
        <div className='edit-profile'>
          <h1>Edit Profile</h1>
          <p>Email: <input type='text' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} /></p>
          <p>Address: <input type='text' value={newAddress} onChange={(e) => setNewAddress(e.target.value)} /></p>
          <p>Phone: <input type='text' value={newPhone} onChange={(e) => setNewPhone(e.target.value)} /></p>

          <button onClick={() => {
            const new_user = { email: newEmail, address: newAddress, phone: newPhone }
            console.log(JSON.stringify(new_user))
            console.log(`JWT ${token.access}`)
            axios
              .patch(`${url}`, new_user, {
                headers: {
                  Authorization: `JWT ${token.access}`
                }
              })
              .then((response) => {
                setMessage('Changes saved!');
              })
              .catch((error) => {
                console.log(error);
              });
          }}>Save</button>

          <p>{message}</p>
        </div>
      </div>
      <div className="AccountProducts">
        <h1 className='title'>Owned Products</h1>
        <div className="product-cards">
        </div>
      </div>
      <div className="AccountProducts">
        <h1 className='title'>Bidded Products</h1>
        <div className="product-cards">
        </div>
      </div>
    </div>
  );
};
export default AccountPage;
