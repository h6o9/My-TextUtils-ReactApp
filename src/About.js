import React from 'react';

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark'? 'white' : '#042743',
    backgroundColor: props.mode === 'dark'? '#042743' : 'white' ,
  };

  return (
    <div>
      <div className='container ' style={myStyle}>
        <div className="accordion" id="accordionExample"  style={myStyle}>
          <h2 style={{color: props.mode === 'dark'? 'white' : '#042743'}}>About Us</h2>
          <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingOne"  style={myStyle}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style={myStyle}>
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
              <div className="accordion-body"  style={myStyle} >
              Our platform is rigorously tested to ensure compatibility with popular browsers like Chrome, Firefox, Safari, and Edge.Ensuring seamless functionality across all major web browsers is paramount for a successful online presence.
              </div>
            </div>
          </div>
          <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingTwo"  style={myStyle}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myStyle}>
                <strong>Free to use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
              <div className="accordion-body"  style={myStyle}>
              Enjoy unrestricted access to our suite of tools without any subscription fees or hidden charges.
              </div>
            </div>
          </div>
          <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingThree"  style={myStyle}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={myStyle}>
                <strong>Browser Compatibility</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"  style={myStyle}>
              <div className="accordion-body"  style={myStyle}>
              Dive deep into your text content with comprehensive analysis tools, unveiling insights and patterns.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
