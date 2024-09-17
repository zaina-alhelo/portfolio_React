import React from 'react'

export default function Projects() {
  return (
 
  <div>
      {/* First Section */}
      <section id="PROJECTES">
        <div className="contener">
          <div className="images">
            <div className="item item1" style={{ width: '100px' }}></div>
            <div className="item item2"></div>
            <div className="item item3"></div>
            <div className="item item4"></div>
            <div className="item item5"></div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section id="PROJECTE">
        <div className="contener">
          <div className="images">
            <div className="item item1">
              <img src="image/facebook.png" alt="Facebook" />
            </div>
            <div className="item item2">
              <img src="image/netflex.png" alt="Netflix" />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section id="PROJECTE">
        <div className="contener">
          <div className="images">
            <div className="item item1">
              <img src="image/youtube.png" alt="YouTube" />
            </div>
            <div className="item item2">
              <img src="image/frontend.png" alt="Frontend" />
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section id="PROJECTE">
        <div className="contener">
          <div className="images">
            <div className="item item1">
              <img src="image/linkedin dis.png" alt="LinkedIn" />
            </div>
          </div>
        </div>
      </section>
    </div>
 
  )
}
