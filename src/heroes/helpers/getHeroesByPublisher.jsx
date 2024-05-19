import { heroesData } from "../data/data";

export const getHeroesByPublisher = (publiser) => {

    const comic =['DC Comics','Marvel Comics'];

    if(!comic.includes(publiser)){
        throw new Error('Erro al obtener heroes')
    }

  return heroesData.filter(item=>item.publisher===publiser);
}
