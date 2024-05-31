import React from 'react'
import logo from '../logo.svg';
export default function Footer() {
  return (
    <div className='foot'>
        <div className='bg-im d-flex flex-column align-items-center'>
            <h1>
                THE ASANAS PURIFY OUR BODY AND <br/>
                KEEP IT HEALTHY, MAKING IT A SUITA- <br/>
                BLE VEHICLE FOR THE SOUL.
            </h1>
            <img src='https://static.vecteezy.com/system/resources/previews/023/629/718/non_2x/mountain-line-art-with-transparent-background-free-png.png' alt='mountain'/>
            <btn className="btn btn-outline-primart btn-custom">see more</btn>
        </div>

      <div className="footer">
        <div className='row'>
          <div className='col-12 col-md-6'>
            <h2>ABOUT</h2>
            <p>Lorem ipsum dolor sit amet, consec <br/>
              tetur adipiscing elit, sed do eiusmod tempor incidi- <br/>
              dunt ultimam quantum
            </p>
            <img src={logo} alt='logo' width="100"/>
          </div>
          <div className='col-12 col-md-6 d-flex flex-row justify-content-center'>

          <div className='txt'>
            <h3>ABOUT</h3>
          <p>Team</p>
          <p>Join us</p>
          <p>Ethic</p>
          <p>Goals</p>
          </div>
          <div className='txt'>
            <h3>ABOUT</h3>
          <p>Team</p>
          <p>Join us</p>
          <p>Ethic</p>
          <p>Goals</p>
            </div>
            <div className='txt'>
            <h3>ABOUT</h3>
          <p>Team</p>
          <p>Join us</p>
          <p>Ethic</p>
          <p>Goals</p>
            </div>

          </div>
          
        </div>

      </div>
         
   
    </div>
  )
}
