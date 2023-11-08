import NavBar from "./NavBar"
import {Outlet} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home({buyCar, increaseLikes}){
    return(  <>
        {/* <NavBar/> */}

        <Card className="bg-dark text-white">
        <Card.Img src={"https://i.gifer.com/1V3W.gif"} alt={''} />
        <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
            Where Dreams Shift into Overdrive!
        </Card.Text>
        <Card.Text>Shop Now!</Card.Text>
        </Card.ImgOverlay>
        </Card>
        

        <Outlet context={{buyCar: buyCar, increaseLikes: increaseLikes}}/>
        
        
        
   
     </>
    )
}

export default Home