import React from 'react'
import { ListHeroes } from '../components/ListHeroes'

export const MarvelPage = () => {
  return (
    <div className='container-md pt-3'>
            <h2 className=' pb-3 text-info' >Marvel Comics</h2>
            <ListHeroes publisher={'Marvel Comics'} />
        </div>
  )
}
