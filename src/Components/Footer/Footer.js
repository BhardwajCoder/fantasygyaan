import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className=' my-3 '>
      <div className='Footer text-center bg-dark text-white'>
       <div className='row'>
       <div class="col-12 col-sm-6 my-3 ">
    <h2 style={{fontFamily:"serif,Georgia"}} >Fantasygyaan.com</h2>
    </div>
    <div class="col-12 col-sm-6">
      <div className='my-3'>
        <div className='Media'>
          <Link to='/about'className='Txt-color'><strong >About</strong></Link><br />
          <Link to='/policy'className='Txt-color'> <strong>Privacy Policy</strong></Link><br />
         <Link to='/contact'className='Txt-color'><strong>Contact</strong></Link>
        </div>
      </div>
    </div>
       </div>
       <h6>Welcome to the Era of Fantasy Cricket</h6>
      </div>
    </footer>
  )
}
export default Footer
