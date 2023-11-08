import {useState} from "react"
import { useOutletContext, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Car from "./Car";


function CarInformation({cars}){

    const {id} = useParams()

    const car = cars.find(c => {
        return c.id === Number(id)
    })

    const [favorite, setFavorite] = useState(false)
    const [displayName, setDisplayName] = useState(true)

    const {buyCar, increaseLikes} = useOutletContext()

    function updateDisplayName(){
        setDisplayName(displayName => !displayName)
    }

    function toggleFavorite(){
        setFavorite(!favorite)
    }

    if(!car){
        return <h1>Error: Car Not Found!</h1>
    }

    return (
        // <div className="car">
        //     <img src={car.image} alt={car.name} />
        //     <button onClick={toggleFavorite} className={favorite? "favorite-button active" : "favorite-button"}>{favorite? "★" : "☆"}</button>
        //     <h4 onClick={updateDisplayName}>{displayName ? car.name : car.model}</h4>
        //     <button onClick={() => {
        //         increaseLikes(car)
        //     }} className="likes-button">{car.likes} likes</button>
        //     <br/><br/>
        //     <button onClick={() => {
        //         buyCar(car.id)
        //     }} className="buy-button">Buy</button>
        // </div>
    
            <Card>
        <Card.Img variant="top" src={car.image} />
        <Card.Body>
          <Card.Text>
            <strong>Name:</strong> {car.name}
            <br/>
            <strong>Model:</strong> {car.model}
            <br/>
            <strong>Year:</strong> {car.Year}
            <br/>
            <strong>Price:</strong> {car.Price}
            <br/>
            <strong>Mileage: </strong>{car.Mileage}
          </Card.Text>
        </Card.Body>
      </Card>
      
    //   <Carousel>
    //   <Carousel.Item>
    //     <Car car={car}/>

    //     {/* <ExampleCarouselImage text="" /> */}
    //     <Carousel.Caption>
    //       <h3></h3>
    //       <p></p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item >

    //     {/* <ExampleCarouselImage text="Second slide" /> */}
    //     <Carousel.Caption>
    //       <h3></h3>
    //       <p></p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
        
    //     {/* <ExampleCarouselImage text="Third slide" /> */}
    //     <Carousel.Caption>
    //       <h3></h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    )
}

export default CarInformation