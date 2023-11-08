import { useState } from "react"
import { useOutletContext, Link } from "react-router-dom"
import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Car({ car }) {
    //console.log(car)

    const [favorite, setFavorite] = useState(false)
    const [displayName, setDisplayName] = useState(true)

    const { buyCar, increaseLikes } = useOutletContext()

    function updateDisplayName() {
        setDisplayName(displayName => !displayName)
    }
    function toggleFavorite() {
        setFavorite(!favorite)
    }



    //    return  <li className="car">
    //         <img src={car.image} alt={car.name} />
    //         <button onClick={toggleFavorite} className={favorite? "favorite-button active" : "favorite-button"}>{favorite? "★" : "☆"}</button>
    //         <h4 onClick={updateDisplayName}>{displayName ? car.name : car.model}</h4>
    //         <button onClick={() => {
    //             increaseLikes(car)
    //         }} className="likes-button">{car.likes} likes</button>
    //         <br/><br/>
    //         <button onClick={() => {
    //             buyCar(car.id)
    //         }} className="buy-button">Buy</button>
    //         <Link to={`/cars/${car.id}`}>See Car Information</Link>
    //     </li>

    // return (
    //     <Card style={{ width: '18rem' }}>
    //       <Card.Img variant={car.name} src={car.image}/>
    //       <Card.Body>
    //         <Card.Title>{car.name}</Card.Title>
    //         <Card.Text>
    //             <h4 onClick={updateDisplayName}>{displayName ? car.name : car.model}</h4>
    //         </Card.Text>
    //         <Button variant="primary"><button onClick={toggleFavorite} className={favorite? "favorite-button active" : "favorite-button"}>{favorite? "★" : "☆"}</button> 
    //         <button onClick={() => {buyCar(car.id)}} className="buy-button">Buy</button>
    //         <button onClick={() => {increaseLikes(car)}} className="likes-button">{car.likes} likes</button>
    //         </Button>
    //       </Card.Body>
    //       <Link to={`/cars/${car.id}`}>See Car Information</Link>
    //     </Card>
    //   );
    // }
    console.log(car.Year)
    return (

        <Card style={{ width: '36rem' }}>
            <Card.Img variant='car' src={car.image} />
            <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>
                    <strong>Model:</strong> {car.model}
                    <br />
                    <strong>Year:</strong> {car.Year}
                    <br />
                    <strong>Price: </strong>{car.Price}
                    <br/>
                    <strong>Mileage: </strong>{car.Mileage}
                </Card.Text>
                <Button variant="primary"><button onClick={toggleFavorite} className={favorite ? "favorite-button active" : "favorite-button"}>{favorite ? "★" : "☆"}</button>
                    <button onClick={() => { buyCar(car.id) }} className="buy-button">Buy</button>
                    <button onClick={() => { increaseLikes(car) }} className="likes-button">{car.likes} Likes : </button>
                </Button>
            </Card.Body>
            <Link to={`/cars/${car.id}`}>See Car Information</Link>
        </Card>
    );
}


export default Car