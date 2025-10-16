import './TopNavBar.css';

export default function TopNavBar({ func, current }) {
    return (
    <nav className="top-nav-bar">
      <ul>
        <li onClick={() => func(0)} className={current === 0 ? 'active' : ''}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* Home icon */}
             <img src="home.svg" style={{ width: '24px', height: '24px' }} alt="Home icon" />
            </span>
            <span className="nav-label">Home</span>
          </div>
        </li>
        <li onClick={() => func(1)} className={current === 1 ? 'active' : ''}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* User icon */}
              <img src="aboutme.svg" style={{ width: '24px', height: '24px' }} alt="About me icon" />
            </span>
            <span className="nav-label">About me</span>
          </div>
        </li>
        <li onClick={() => func(2)} className={current === 2 ? 'active' : ''}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* Document icon */}
              <img src="resume.svg" style={{ width: '24px', height: '24px' }} alt="Resume icon" />
            </span>
            <span className="nav-label">Resume</span>
          </div>
        </li>
        <li onClick={() => func(3)} className={current === 3 ? 'active' : ''}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* Portfolio/Briefcase icon */}
              <img src="portfolio.svg" style={{ width: '24px', height: '24px' }} alt="Portfolio icon" />
            </span>
            <span className="nav-label">Portfolio</span>
          </div>
        </li>
        <li onClick={() => func(4)}  className={current === 4 ? 'active' : ''}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* Contact/Mail icon */}
              <img src="mail.svg" style={{ width: '24px', height: '24px' }} alt="Contact icon" />
            </span>
            <span className="nav-label">Contact</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}