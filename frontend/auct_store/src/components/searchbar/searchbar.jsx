import { React, useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';

import "./searchbar.css";



const Searchbar = () => {

    const [input, setinput] = useState("");
    const [sneaker, setSneaker] = useState([])
    const handleInput = (e) => {
        setinput(e.target.value.toLowerCase());
    }
    useEffect(() => {

        axios
            .get("http://localhost:8000/api/v1/product/")
            .then((response) => {
                setSneaker(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])



    return (
        <>
            <Input placeholder="Search" onChange={handleInput} />
            <Button type="primary" style={{ height: 40, marginLeft: '10px' }}>Search</Button>
        </>
    )
}
export default Searchbar;