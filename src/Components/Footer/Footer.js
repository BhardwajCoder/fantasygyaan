import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className=' my-3 '>
      <div className='Footer text-center bg-dark text-white container-fluid'>
       <div className='row'>
       <div class="col-12 col-sm-6 my-3 ">
    <h2 >Fantasygyaan.com</h2>
    </div>
    <div class="col-12 col-sm-6">
      <div className='my-3'>
        <div className='Media' >
          <Link to='/about'className='Txt-color'>About</Link><br />
          <Link to='/policy'className='Txt-color'>Privacy Policy</Link><br />
         <Link to='/contact'className='Txt-color'>Contact</Link>
        </div>
      </div>
    </div>
       </div>
       <h6 style={{fontFamily:"sans-serif",fontSize:'1.4rem',fontWeight:'500'}}>Welcome to the Era of Fantasy Cricket</h6>
      </div>
    </footer>
  )
}
export default Footer
