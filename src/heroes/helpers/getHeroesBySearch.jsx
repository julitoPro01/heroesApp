import { heroesData } from "../data/data";

export const getHeroesBySearch = (herosearch) => {
   return heroesData.filter(item => {
        if (item.superhero.toLowerCase().includes(herosearch)
          || item.superhero.toUpperCase().includes(herosearch)) {
  
          return item;
        }
  
      });
}
