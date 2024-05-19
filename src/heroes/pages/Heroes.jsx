import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroeById";

export const Heroes = () => {

   const parms = useParams();

   const OneHoero = getHeroeById(parms.id);

   const navigate =useNavigate()

   const onBackOut=()=>{
    navigate(-1);
   }
   
   if(!OneHoero){
     return <Navigate to={'/marvel'} />
    }
    
    const imgHeroes ='/heroes/'+parms.id+'.jpg'

   
  return (
    <div className="container-md pt-3">
    <div className="row row-cols-1 pt-3 justify-content-center g-2" >
      <button className="btn btn-primary rounded-start-pill col-1 fs-5"
      style={{maxWidth:'80px'}}
      onClick={onBackOut}
      > {"<<"}</button>
      <h5 className="display-5 col-11 text-info"  > <b>{OneHoero.superhero} </b></h5>
      <hr />
      <div className="col-4 animate__animated animate__backInLeft">
        <img src={imgHeroes} alt="heroe" className="img-thumbnail" style={{maxHeight:'500px'}} />
      </div>
      <div className="col-6 list-group list-group-flush" >
        <h6 className="display-6" > {OneHoero.alter_ego} </h6>
        <p className="list-group-item" > {OneHoero.characters} </p>
        <p className="list-group-item"> {OneHoero.first_appearance} </p>
        <p className="list-group-item"> {OneHoero.publisher} </p>
      </div>
    </div>
      </div>
      
  )
}
