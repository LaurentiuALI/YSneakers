import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./addProduct.css"

const AddProduct = () => {
    const navigate = useNavigate()
    const [model, setModel] = useState("");
    const [user, setUser] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [gender, setGender] = useState("");
    const [releaseYear, setReleaseYear] = useState("2021");
    const [size, setSize] = useState("");
    const [photos, setPhotos] = useState("");
    const [condition, setCondition] = useState("");
    const [startingPrice, setStartingPrice] = useState("");
    const [error, seterror] = useState("")

    const handleModelChange = (e) => {
        setModel(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleReleaseYearChange = (e) => {
        setReleaseYear(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
    const handlePhotosChange = (e) => {
        setPhotos(e.target.files[0]);
    };

    const handleConditionChange = (e) => {
        setCondition(e.target.value);
    };

    const handleStartingPriceChange = (e) => {
        setStartingPrice(e.target.value);
    };

    useEffect(() => {
        const url = 'http://localhost:8000/auth/users/me';
        const token = JSON.parse(sessionStorage.getItem('user'));

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            model: model,
            brand: brand,
            color: color,
            gender: gender,
            release_year: releaseYear,
            size: size,
            photos: photos,
            condition: condition,
            starting_price: startingPrice,
            current_bidder: user.email,
            owner: user.email
        }

        axios.post('http://localhost:8000/api/v1/product/', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log(JSON.stringify(data))
                seterror(Object.keys(error.response.data)[0].charAt(0).toUpperCase() + Object.keys(error.response.data)[0].slice(1) + " - " + Object.values(error.response.data)[0][0]);
            });
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <button className='form-submit-button' onClick={() => window.history.back()}>Back</button>
            <label className="form-label">Model:</label>
            <input className="form-input"
                type="text"
                value={model}
                onChange={handleModelChange}
            />
            <br />
            <label className="form-label">Brand:</label>
            <input className="form-input"
                type="text"
                value={brand}
                onChange={handleBrandChange}
            />
            <br />
            <label className="form-label">Color:</label>
            <input className="form-input"
                type="text"
                value={color}
                onChange={handleColorChange}
            />
            <br />
            <label className="form-label">Gender:</label>
            <br />
            <input className="form-radio"
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
            />
            <label className="form-label form-radio-label">Male</label>
            <input className="form-radio"
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
            />
            <label className="form-label form-radio-label">Female</label>
            <input className="form-radio"
                type="radio"
                value="unisex"
                checked={gender === "unisex"}
                onChange={handleGenderChange}
            />
            <label className="form-label form-radio-label">Unisex</label>
            <input className="form-radio"
                type="radio"
                value="child"
                checked={gender === "child"}
                onChange={handleGenderChange}
            />
            <label className="form-label form-radio-label">Child</label>
            <br />
            <label className="form-label">Release Year:</label>
            <select className="form-input form-select" value={releaseYear} onChange={handleReleaseYearChange}>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
            <br />
            <label className="form-label">Size:</label>
            <input className="form-input"
                type="text"
                value={size}
                onChange={handleSizeChange}
            />
            <br />
            <label className="form-label">Photos:</label>
            <input className="form-input form-file"
                type="file"
                onChange={handlePhotosChange}
            />
            <br />
            <label className="form-label">Condition:</label>
            <input className="form-input"
                type="text"
                value={condition}
                onChange={handleConditionChange}
            />
            <br />
            <label className="form-label">Starting Price:</label>
            <input className="form-input"
                type="text"
                value={startingPrice}
                onChange={handleStartingPriceChange}
            />
            <br />
            {error != '' && <p style={{ color: "red" }}>{error}</p>}
            <button className="form-submit-button" type="submit" onClick={() => window.history.back()}>Submit</button>
        </form >
    )
}

export default AddProduct;
