import React from 'react'
import Book1 from '../assets/Book1.jpg'

function Card() {
    return (
        <>
        <div className="col-6 col-sm-3 col-md-2 border my-2">
            <div className="card">
              <img className="card-img-top" src={Book1} />
              <div className="card-body">
                <h5 className="card-title text-center">Card Title</h5>
                <p className="card-text text-center">Some quick example text</p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Card;