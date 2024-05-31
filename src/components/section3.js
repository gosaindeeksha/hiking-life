import React from 'react'

export default function Section3() {
  return (
    <div className='sec3'> 
    <div className='d-flex flex-md-row flex-column justify-content-between'>
    <div md={6} className='parts ' >
          <h2 className="font-weight-bold">ROCK</h2>
          <h2 className="font-weight-bold">CLIMBING</h2>
          <br />
          <br />
          
          <h3>1. CLASSES & EVENTS</h3>
          <br/>
          <p>
            Hatha is the most classic yoga. Its
            <br /> origin is in the Raya Yoga of Patanjali
            <br />
            and other classical texts such as
            <br /> Bhagavad Gita and Hatha Yoga 
            <br />Pradipika.
          </p>
          
          <hr  />
          
          <p id='mod'> 10 modules
            <br/> divided into 7 weekends</p>
            <br/>
          <div className="d-flex flex-row justify-content-start">
            <div className='subt'>
              Start<br />
              April 15<br />
              20.00 hs
            </div>
            <div className='subt'>
              Price<br />
              $900
            </div>
          </div>
        </div>
        <div  md={6} className='text-center parts'>
          <img
            src="https://img.freepik.com/free-photo/two-friends-hiking-together_23-2148106838.jpg?t=st=1717105637~exp=1717109237~hmac=7c6aa67af538234d9b1dd91c510afaedd4f37a09b2e60b67f716f33089466cb6&w=996"  // Replace with your image path
            alt="Rock Climbing"
            className="img-fluid "
          />
          <p className="mt-3 activity font-italic">WALKING IN NATURE 
          <br />AS A RECREATIONAL
          <br /> ACTIVITY</p>
        </div>
    </div>
      <div className="container my-5">
      <div className="d-flex flex-wrap flex-row align-items-start">
        
        
      </div>
    </div>
    </div>
  )
}
