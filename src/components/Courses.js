import React from 'react'

export default function Courses() {
  return (
   <>
  {/* 
  COURSES SECTION
  */}
  <section id="COURSES">
    <div id="course">
      <img src="image/courses.png" alt="logo" width="300px" />
    </div>
    <div className="photo">
      <div className="test">
        <div className="course course1">
          <div className="content">
            HTML development at Orange Coursat (Mar.2024)
          </div>
        </div>
        <div className="course course2">
          <div className="content">
            CSS development at Orange Coursat (Mar.2024)
          </div>
        </div>
      </div>
      <div className="course course3" id="center">
        <div className="content">Javascript at Orange Coursat (Mar.2024)</div>
      </div>
      <div className="y">
        <div className="course course4" id="cour">
          <div className="content">
            60 hour of Python AI (Machine learning) at The Hope International
            Company (Sep. - Dec. 2023)
          </div>
        </div>
        <div className="course course5">
          <div className="content">
            Exploring Extended Reality VR, AR &amp; MR at Pioneers Academy (Dec.
            2023)
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
