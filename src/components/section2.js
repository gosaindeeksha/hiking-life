import React from 'react';



export default function Section2() {
  return (
    <div className='sec2'>
        <h2>HIKING AND CAMPING</h2>
        <h1>CLASSES</h1>
        <hr noshade/>
       
      <div className='d-flex flex-md-row flex-xs-column justify-content-between'>
        <div  md={12} lg={4} className="justify-content-center d-flex flex-column align-items-center">
          <img src='https://static.vecteezy.com/system/resources/previews/023/629/718/non_2x/mountain-line-art-with-transparent-background-free-png.png' alt='mountains'/>
          <h5>ACTIVITIES</h5>
          <p>Lorem ipsum dolor sit amet, 
          <br/> consectetur adipiscing, elit 
          <br/>molestie posuere.</p>
        </div>
        <div  md={12} lg={4} className=" justify-content-start d-flex flex-column align-items-center">
        <img src='https://static.vecteezy.com/system/resources/previews/023/629/718/non_2x/mountain-line-art-with-transparent-background-free-png.png' alt='mountains'/>
        <h5>HIKING</h5>
        <p>Lorem ipsum dolor sit amet, 
          <br/> consectetur adipiscing, elit 
          <br/>molestie posuere.</p>
        </div>
        <div  md={12} lg={4} className=" justify-content-start d-flex flex-column align-items-center">
        <img src='https://static.vecteezy.com/system/resources/previews/023/629/718/non_2x/mountain-line-art-with-transparent-background-free-png.png' alt='mountains'/>
        <h5>MOUNTAINS</h5>
        <p>Lorem ipsum dolor sit amet, 
          <br/> consectetur adipiscing, elit 
          <br/>molestie posuere.</p>
        </div>
      </div>
    
      
    </div>
  )
}
