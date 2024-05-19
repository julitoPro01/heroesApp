import { heroesData } from "../data/data"

export const getHeroeById = (id) => {
  return heroesData.find(item=>item.id===id);
}
