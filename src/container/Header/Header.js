import React from 'react'
import { Link } from 'react-router-dom'



export const Header = () => {
   return (
      <React.Fragment>
         <div className='ui menu'>
            <div className='ui container center'>
               <Link to = {"/"}><h2>Redux Shop</h2></Link>
            </div>
         </div>
      </React.Fragment>

   )
}
