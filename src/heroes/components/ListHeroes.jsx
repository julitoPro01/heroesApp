import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { CardHeroes } from "./CardHeroes";
import './style.css'

export const ListHeroes = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (

            <div className=" row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-xl-5 g-2"
            >
                {
                    heroes.map(item=>(
                        <CardHeroes key={item.id} {...item} />
                    ))
                }
            </div>
          
    )
}
// row-cols-sm-3
            //  row-cols-md-4 row-cols-xl-5 g-3