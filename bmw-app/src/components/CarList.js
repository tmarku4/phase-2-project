import React from "react"
import Car from "./Car"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CarList({cars}){

    const carComponents = cars.map(car => {
        return <Car key={car.id} car={car} />
        
    })

    return (

        <Row style={{width: '90vw', margin:'0 auto', gap: '20px', justifyContent: 'center'}} xs={1} md={2} className="g-4">
            {carComponents}
        </Row>
        
    )
}
export default CarList;