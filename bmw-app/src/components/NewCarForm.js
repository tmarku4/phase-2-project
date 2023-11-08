import {useNavigate} from "react-router-dom"
import {useState} from "react"

function NewCarForm({addCar, updateFormData}){

    const [submittedForm, setSubmittedForm] = useState(false)

    const navigate = useNavigate()

    if(submittedForm){
      navigate('/cars')
    }

    return (
      <div className="new-car-form">
        <h2>New Car</h2>
        <form onSubmit={(event) => {
          addCar(event)
          setSubmittedForm(true)
        }}>
          <input onChange={updateFormData} type="text" name="name" placeholder="Car name" required/>
          <input onChange={updateFormData} type="text" name="image" placeholder=" Image " required/>
          <input onChange={updateFormData} type="text" name="model" placeholder=" Model " required/>
          <input onChange={updateFormData} type="text" name="Year" placeholder=" Year " required/>
          <input onChange={updateFormData} type="text" name="Price" placeholder=" Price " required/>
          <input onChange={updateFormData} type="text" name="Mileage" placeholder=" Mileage " required/>

          <button type="submit">Add Car</button>
        </form>
      </div>
    );
 }

  
  export default NewCarForm;