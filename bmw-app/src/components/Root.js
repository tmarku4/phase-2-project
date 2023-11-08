import NavBar from "./NavBar"
import {Outlet} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Root({buyCar, increaseLikes, setSearchText}){
    return( 
        <>
        <NavBar setSearchText={setSearchText} />
        <Outlet context={{buyCar: buyCar, increaseLikes: increaseLikes}}/>
        </>

    )
}

export default Root