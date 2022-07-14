import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({book}) {
    let navigate = useNavigate();

    const proceed = () => {
      navigate(`/book/${book._id}`)
    }

    return (
        <>
          <div className="card border-0" style={{cursor: 'pointer'}} onClick={proceed}>
            <img className="card-img-top mx-auto" 
            src={require(`../../public/uploads/${book.Image}`)} 
            alt="Book"
            style={{width: '150px', height: '250px'}}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{book.Name}</h5>
              <p className="card-text text-center">{book.Price + '$'}</p>
            </div>
          </div>
        </>
    )
}

export default Card;