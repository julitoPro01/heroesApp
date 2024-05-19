import React from 'react'
import { ListHeroes } from '../components/ListHeroes'

export const DcPages = () => {


    return (
        <div className='container-md'>
            <h2 className='p-3 text-info '>DC Comics</h2>
            <ListHeroes publisher={'DC Comics'} />
        </div>
    )
}
