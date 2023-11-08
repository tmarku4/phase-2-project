// //import logo from './logo.svg';
//import './App.css';

// import Header from "./Header"
// import Home from "./Home"
// import NewCarForm from "./NewCarForm"
// import Search from "./Search"
// import CarList from "./CarList"
// import ErrorPage from "./ErrorPage"
// import CarInformation from "./CarInformation"

// import {useState, useEffect} from "react"
// import {createBrowserRouter, RouterProvider} from "react-router-dom"

// function App() {

//   const [searchText, setSearchText] = useState("")
//   const [formData, setFormData] = useState({})
//   const [cars, setCars] = useState([])
//   useEffect(() => {
//     fetch("http://localhost:3000/cars")
//     .then(response => response.json())
//     .then(carData => setCars(carData))
//   }, [])
//   const filteredCars = cars.filter(car => {
//     return car.name.toUpperCase().includes(searchText.toUpperCase()) || car.model.toUpperCase().includes(searchText.toUpperCase())
//   })
//   function buyCar(id){
//     fetch(`http://localhost:3000/cars${id}`, {
//       method: "DELETE"
//     })
//     .then(() => {
//       setCars(cars.filter(car => {
//         return car.id !== id
//       }))
//     })
//   }
//   function addCar(event){
//     event.preventDefault()

//     fetch("http://localhost:3000/cars", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({...formData, likes: 0})
//     })
//     .then(response => response.json())
//     .then(newCar => setCars([...cars, newCar]))
//   }
//   function updateFormData(event){
//     setFormData({...formData, [event.target.name]: event.target.value})
//   }
//   function increaseLikes(car){
//     fetch(`http://localhost:3000/cars${car.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({likes: car.likes + 1})
//     })
//     .then(response => response.json())
//     .then(updatedCar => {
//       setCars(cars => cars.map(c => {
//         if(c.id === updatedCar.id){
//           return updatedCar
//         }
//         else{
//           return c
//         }
//       }))
//     })
//   }

//   const routes = [
//     {
//       path: "/",
//       element: <Home buyCar={buyCar} increaseLikes={increaseLikes} />,
//       errorElement: <ErrorPage/>,
//       children: [
//         {
//           path: "/",
//           element: <h1 className="home">WELCOME TO REDLINE DEALERSHIP!</h1>
//         },
//         {
//           path: "/cars",
//           element: <>
//             <Search setSearchText={setSearchText} />
//             <CarList cars={filteredCars} />
//           </>
//         },
//         {
//           path: "/add_car",
//           element: <NewCarForm addCar={addCar} updateFormData={updateFormData} />
//         },
//         {
//           path: "/cars/:id",
//           element: <CarInformation cars={cars}/>
//         }
//       ]
//     }
//   ]

//   const router = createBrowserRouter(routes)

//   return (
//     <div className="app">
//       <Header />
//       {/* <NewCarForm addCar={addCar} updateFormData={updateFormData} />
//       <Search setSearchText={setSearchText} />

//        */}

//       <RouterProvider router={router}/>
//     </div>
//   );
// }
// export default App;

import '../App.css'
//import Header from "./Header"
import Home from "./Home"
import Search from './Search'
import NewCarForm from './NewCarForm'
import ErrorPage from "./ErrorPage"
import CarList from './CarList';
import CarInformation from "./CarInformation"
import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from './NavBar'
import Root from './Root'


function App() {

  const [cars, setCars] = useState([])
  const [formData, setFormData] = useState({})
  const [searchText, setSearchText] = useState("")
  //console.log(cars)


  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then(response => response.json())
      .then(carsData => {
        setCars(carsData)
      })
  }, [])

  function buyCar(id){
        fetch(`http://localhost:3000/cars${id}`, {
          method: "DELETE"
        })
        .then(() => {
          setCars(cars.filter(car => {
            return car.id !== id
          }))
        })
      }


      console.log(formData)
  function addCar(event) {
    event.preventDefault()

    fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(newCar => {
        setCars([...cars, newCar])
      })

  }

  function updateFormData(event) {
    
      setFormData({ ...formData, [event.target.name]: event.target.value })
    
  }

  function updateSearchText(event) {
    setSearchText(event.target.value)
  }

  const filteredCars = cars.filter(car => {
    return car.name && car.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function increaseLikes(car){
        fetch(`http://localhost:3000/cars/${car.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({likes: car.likes + 1})
        })
        .then(response => response.json())
        .then(updatedCar => {
          setCars(cars => cars.map(c => {
            if(c.id === updatedCar.id){
              return updatedCar
            }
            else{
              return c
            }
          }))
        })
      }

  const routes = [
    {
      path: "/",
      element: 
      <Root setSearchText={setSearchText}  buyCar={buyCar} increaseLikes={increaseLikes}/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cars",
          element: <>
            {/* <Search setSearchText={setSearchText} /> */}
            <CarList cars={filteredCars} />

          </>
        },
        {
          path: "/add_car",
          element: <NewCarForm updateFormData={updateFormData} addCar={addCar} />
        },
        {
          path: "/cars/:id",
          element: <CarInformation cars={cars} />
        }
      ]
    }
  ]
  const router = createBrowserRouter(routes)

  return (
    <div className="main-container">
      <img src="https://cdn07.carsforsale.com/CustomTemplatePhotos/1040866/photos/logo.ecbe5656.png" alt="" />
      <h1></h1>


      <RouterProvider router={router} />
     
    </div>
  )


}

export default App;