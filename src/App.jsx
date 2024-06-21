import { useState } from 'react'
import './app.scss'

function App() {
  const steps = ["One", "Two", "Three", "Four", "Done!"];
  const [count, setCount] = useState(0);

  const moveBack = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const moveOn = () => {
    if (count < steps.length - 1) {
      setCount(count + 1);
    }
  }

  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <div className="main">
            {steps.map((step, index) => (
              <div key={index} className={`step-container`}>
                <div className={`stone ${index <= count ? 'full' : ''}`}>
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <div className={`line ${index < count ? 'line-full' : ''}`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="forBtns">
            <button className='prevBtn' onClick={moveBack}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
              </svg>
            </button>
            <button className='nextBtn' onClick={moveOn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </button>
          </div>
          <div className="result">
            Current Step: {steps[count]}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
