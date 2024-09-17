import React from 'react'

export default function Header() {
  return (
   <div className="b">
  {/* navbar */}
  <header>
    <nav className="big">
      <div className="logo">
        <a href="#">
          <img src="image/logo.png" alt="logo" />
        </a>
      </div>
      <ul className="menu">
        <li>
          <a href="#HOME">HOME</a>
        </li>
        <li>
          <a href="#ABOUT">ABOUT</a>
        </li>
        <li>
          <a href="#EDUCATION">EDUCATION</a>
        </li>
        <li>
          <a href="#SKILLS">SKILLS</a>
        </li>
        <li>
          <a href="#COURSES">COURSES</a>
        </li>
        <li>
          <a href="#PROJECTES">PROJECTS</a>
        </li>
        <li>
          <a href="#CONTACT">CONTACT</a>
        </li>
      </ul>
    </nav>
    <nav className="navbar bg-body-tertiary fixed-top" id="nav-bar">
      <div className="container-fluid">
        <a href="#">
          <img src="image/logo.png" alt="logo" width="100px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              zaina portfolio
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Home"
                  data-bs-dismiss="offcanvas"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#ABOUT"
                  data-bs-dismiss="offcanvas"
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#EDUCATION"
                  data-bs-dismiss="offcanvas"
                >
                  EDUCATION
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#SKILLS"
                  data-bs-dismiss="offcanvas"
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#COURSES"
                  data-bs-dismiss="offcanvas"
                >
                  COURSES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#PROJECTES"
                  data-bs-dismiss="offcanvas"
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#CONTACT"
                  data-bs-dismiss="offcanvas"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>

  )
}
