import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import { heroesData } from "../data/data";
import { CardHeroes } from "../components/CardHeroes";
import { useEffect, useState } from "react";
import { getHeroesBySearch } from "../helpers/getHeroesBySearch";

export const SearchPage = () => {

  const [hero, sethero] = useState([]);



  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);

  const { formState, onInputChange, herosearch } = useForm({ herosearch: !query.q ? '':query.q });



  const onSerachForm = (e) => {
    e.preventDefault();

    if (herosearch.trim().length >= 1){
      
      navigate('?q=' + herosearch.trim());
      
      const heroes = getHeroesBySearch(herosearch.trim());
      sethero([...heroes]);
    }else{
      navigate('?q=' + herosearch.trim());
      sethero([])
    };

  }

  useEffect(() => {

    if(!query.q) return;
    const heroes = getHeroesBySearch(query.q);
    sethero([...heroes]);
  }, [])

  return (
    <>
    <div  className="container-md pt-3">
      <h2 className="offset-md-0 pt-2 text-info" > Search hero </h2>
      <hr />
      <div className="row g-3 " >

        <div className="col-sm-12 col-md-5" >
          <h4> searching </h4>
          <hr />
          <form onSubmit={onSerachForm} className=" input-group">

            <input type="text" placeholder="Search a hero"
              className="form-control" name='herosearch' autoComplete="off"
              value={formState.herosearch} onChange={onInputChange} />
            <button className="btn btn-secondary border rounded-end " > search </button>

          </form>
        </div>
        <div className=" col-12 col-md-7">
          <h4> Results </h4>
          <hr />

          {
            !query.q
            && <div className=" col-12 alert alert-info animate__animated animate__fadeIn" > <span> Result(s) </span> </div>
          }

          {
            
            (!!query.q && !hero.length) && (<div className="alert alert-danger animate__animated animate__fadeIn" >
            <span> not fount hero with <b>{query.q}</b>  </span>
          </div>)
          }

          <div className="row row-cols-2 row-cols-sm-3 row-cols-xl-3 g-1">
            {
              !!hero.length && hero.map(item => <CardHeroes key={item.id} {...item} />)
            }

          </div>
        </div>
      </div>

</div>
    </>
  )
}
