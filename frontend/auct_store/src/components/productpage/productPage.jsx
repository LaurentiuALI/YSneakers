import { React, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./productPage.css"
import { Button, Form, Input, Alert } from 'antd';
const ProductPage = () => {

  const navigate = useNavigate();

  const [sneaker, getSneaker] = useState([]);
  const [bidValue, setBidValue] = useState(0)
  const [user, setUser] = useState("");
  const [remainingTime, setRemainingTime] = useState(Date())
  const [error, setError] = useState('')

  const id = useParams();
  const url = "http://localhost:8000/api/v1/product";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });




  useEffect(() => {
    const _url = 'http://localhost:8000/auth/users/me';
    const token = JSON.parse(sessionStorage.getItem('user'));
    const getUser = () => {
      axios

        .get(`${_url}`, {
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
    const getAllProducts = () => {
      if (id) {
        axios
          .get(`${url}/${id.id}`)
          .then((response) => {
            const allProducts = response.data;

            setRemainingTime(Date(allProducts.created_at))

            setBidValue(parseFloat(allProducts.starting_price))

            getSneaker(allProducts);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    };
    getAllProducts();
  }, [url, id]);

  const formatData = (miliseconds) => {

    let seconds = Math.floor(miliseconds / 1000 % 60)
    let minutes = Math.floor(miliseconds / 1000 / 60 % 60)
    let hours = Math.floor(miliseconds / 1000 / 60 / 60)

    return { hours: hours, minutes: minutes, seconds: seconds }
  }
  const currentDate = new Date();
  const target = new Date(sneaker.created_at);
  const difference = target - currentDate;
  useEffect(() => {

    if (difference < 0) {
      axios.delete(`${url}/${id.id}`).then((response) => {
        navigate("/", { replace: true })
        console.log("It worked: " + response)

      })
        .catch((error) => {
          console.log(error);
        });
    }

    const interval = setInterval(() => {

      setTimeLeft(formatData(difference))
    }, 750);
    return () => clearInterval(interval)


  }, [difference, id]);




  const bid = (values) => {
    if (bidValue > sneaker.starting_price) {

      getSneaker({ ...sneaker, starting_price: `${parseFloat(bidValue)}`, current_bidder: user.email })


      if (id) {
        axios
          .patch(`${url}/${id.id}`, { starting_price: parseFloat(bidValue), current_bidder: user.email })
          .then((response) => {
            console.log("It worked: " + response)

          })
          .catch((error) => {
            console.log(JSON.stringify(sneaker))
            console.log(error);
          });
      }

    }
    else {

      setError(<p style={{ color: "red" }}>Enter a bigger bid.</p>)

    }


  }

  return (
    <>
      <div className="productPage-wrapper">
        <div className="image">
          <span className="description">
            <h1>{sneaker.brand} {sneaker.model}</h1>
            <p>{sneaker.color}, {sneaker.size}, {sneaker.condition}</p>
          </span>
          <img src={`${url}${sneaker.photos}`} alt={sneaker.model} />
        </div >

        <div className="bidding">
          <div className="remainingTime">
            {sneaker.created_at && <p>Remaining time: {timeLeft.hours} h {timeLeft.minutes} min {timeLeft.seconds} sec</p>}
          </div>
          <div className="bid-info">
            <p>Current bid: {sneaker.starting_price}</p>
            Last Bidder: {sneaker.current_bidder}
          </div>
          <div className="bid-control">
            <div className="bid-button">
              <Input value={bidValue} />
              <Button onClick={() => setBidValue(bidValue + 1)}> + </Button>
            </div>
            {error}
            <Button type="primary" onClick={bid}>Bid</Button>
          </div>
          <Button style={{ marginBottom: "2rem" }}>
            <Link to="/">
              Back
            </Link>
          </Button>


        </div>
      </div >
    </>
  )
};

export default ProductPage;