import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import './account.css';
import ProductCard from '../productCard/productCard';

const AccountPage = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({});

  const url = 'http://localhost:8000/auth/users/me';
  const token = JSON.parse(sessionStorage.getItem('user'));

  const [products, getProducts] = useState([]);
  const products_url = "http://localhost:8000/api/v1/product";

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get(`${products_url}`)
      .then((response) => {
        const allProducts = response.data;
        getProducts(allProducts.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const showBidded = products.filter((product) => {
    return product.current_bidder == user.email
  }).map((product) => <ProductCard prod={product} />)
  const showOwned = products.filter((product) => {
    return product.owner == user.email
  }).map((product) => <ProductCard prod={product} />)


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
          <div className='buttons-account'>
            <button className='BackButton' onClick={() => window.history.back()}>Back</button>
            <button className='logout' onClick={() => {
              sessionStorage.clear()
              navigate("/login", { replace: true })
            }}>Logout</button>
          </div>
        </div>
        <div className='edit-profile'>

          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <p>Phone: {user.phone_number}</p>
        </div>
      </div>
      <div className="AccountProducts">
        <div className='title'>
          <h1 >Owned Products</h1>
        </div>
        <div className="product-cards">
          {products != null && showOwned}

        </div>
      </div>
      <div className="AccountProducts">
        <div className='title'>
          <h1 >Bidded Products</h1>
        </div>
        <div className="product-cards">
          {products != null && showBidded}

        </div>
      </div>
    </div>
  );
};
export default AccountPage;
