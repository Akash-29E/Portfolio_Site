import './TopNavBar.css';

export default function TopNavBar() {
    return (
    <nav className="top-nav-bar">
      <ul>
        <li className="nav-item">
          <span className="nav-icon">
            {/* Home icon */}
           <img src="home.svg" style={{ width: '24px', height: '24px' }} alt="" />
          </span>
          <span className="nav-label">Home</span>
        </li>
        <li className="nav-item">
          <span className="nav-icon">
            {/* User icon */}
            <img src="aboutme.svg" style={{ width: '24px', height: '24px' }} alt="" />
          </span>
          <span className="nav-label">About me</span>
        </li>
        <li className="nav-item">
          <span className="nav-icon">
            {/* Document icon */}
            <img src="resume.svg" style={{ width: '24px', height: '24px' }} alt="" />
          </span>
          <span className="nav-label">Resume</span>
        </li>
        <li className="nav-item">
          <span className="nav-icon">
            {/* Portfolio/Briefcase icon */}
            <img src="portfolio.svg" style={{ width: '24px', height: '24px' }} alt="" />
          </span>
          <span className="nav-label">Portfolio</span>
        </li>
        <li className="nav-item">
          <span className="nav-icon">
            {/* Contact/Mail icon */}
            <img src="mail.svg" style={{ width: '24px', height: '24px' }} alt="" />
          </span>
          <span className="nav-label">Contact</span>
        </li>
      </ul>
    </nav>
  );
}