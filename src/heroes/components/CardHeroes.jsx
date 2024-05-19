import { Link } from "react-router-dom"

let ok=false;

export const CardHeroes = ({id
    ,superhero
    ,publisher
    ,alter_ego
    ,first_appearance
    ,characters}) => {
       
        const imgHeroes ='./heroes/'+id+'.jpg'
    return (
       

        <div className="card item-card mt-2 border-0 animate__animated animate__fadeIn" id={id}>
            <div className="card-body border " style={{paddingBottom:'50px'}}>
                <img src={imgHeroes} alt="plop" className="card-img" />
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text"> {alter_ego} </p>
                <p className="card-text"> { first_appearance} </p>
                <ComponentCharacters alter_ego={alter_ego} characters={characters} />
                <Link to={`/heroe/${id}`} className="btn btn-primary mb-2"
                    style={{width:'80px',position:'absolute',bottom:'0'}}
                    >
                Mas...
                </Link>
                        </div>
        
        </div>
    )
}

const ComponentCharacters =({alter_ego,characters})=>{

    return (alter_ego===characters)
        ? <></>
        : <p className="card-text"> { characters} </p>

}