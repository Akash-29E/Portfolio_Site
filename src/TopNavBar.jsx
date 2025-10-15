import './TopNavBar.css';

export default function TopNavBar({ func }) {
    return (
    <nav className="top-nav-bar">
      <ul>
        <li onClick={() => func(0)}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* Home icon */}
             <img src="home.svg" style={{ width: '24px', height: '24px' }} alt="Home icon" />
            </span>
            <span className="nav-label">Home</span>
          </div>
        </li>
        <li onClick={() => func(1)}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* User icon */}
              <img src="aboutme.svg" style={{ width: '24px', height: '24px' }} alt="About me icon" />
            </span>
            <span className="nav-label">About me</span>
          </div>
        </li>
        <li onClick={() => func(2)}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* Document icon */}
              <img src="resume.svg" style={{ width: '24px', height: '24px' }} alt="Resume icon" />
            </span>
            <span className="nav-label">Resume</span>
          </div>
        </li>
        <li onClick={() => func(3)}>
          <div className="nav-item">
            <span className="nav-icon">
              {/* Portfolio/Briefcase icon */}
              <img src="portfolio.svg" style={{ width: '24px', height: '24px' }} alt="Portfolio icon" />
            </span>
            <span className="nav-label">Portfolio</span>
          </div>
        </li>
        <li onClick={() => func(4)}>
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