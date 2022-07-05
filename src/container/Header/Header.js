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


   //   <Container>
   //          <Navbar expand="lg" variant="light" bg="dark">
   //             <Container>
   //               <h1>Fake Shop</h1>
   //             </Container>
   //          </Navbar>
   //       </Container>