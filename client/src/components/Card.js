import React from 'react'

function Card({book}) {
    return (
        <>
          <div className="card border-0">
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