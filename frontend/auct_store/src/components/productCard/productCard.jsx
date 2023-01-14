import { React } from 'react';
import { Link } from "react-router-dom";
// import Template from '../templates/template';
import "./productCard.css";

const ProductCard = ({ prod }) => {
    return (
        <div className="card">
            <div className="fill">
                <img src={prod.photos != null && `http://localhost:8000/api/v1/product${prod.photos}`} className="image" alt={prod.model} style={{ "width": "100%" }} />
            </div>
            <h1>{prod.model}</h1>
            <p>
                Size: {prod.size}   |   Gender: {prod.gender}
            </p>
            <p>
                Condition: {prod.condition}
            </p>

            <Link to={`/product/${prod.id}`}>
                <button>
                    View
                </button>
            </Link>
        </div>


    )
}

export default ProductCard
