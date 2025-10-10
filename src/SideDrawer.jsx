import './SideDrawer.css';

export default function SideDrawer() {
    return (
        <>
        <aside className="side-drawer">
        <div className="drawer-img-container">
          <div className="profile-img-ripple">
            <img
              src="./profile2.jpg"
              alt="Profile"
              className="drawer-profile-img"
            />
          </div>
          <div className="drawer-profile-name">Akash Parmar</div>
          <div className="drawer-profile-designation">Web Developer</div>
            <div className="drawer-profile-socials">
              <a href="https://www.linkedin.com/in/parmar-akash/" target="_blank" rel="noopener noreferrer" className="drawer-social-icon" aria-label="LinkedIn">
                <img src="./linkedin.svg" alt="LinkedIn" width="24" height="24" style={{ display: 'block' }} />
              </a>
              <a href="https://github.com/Akash-29E/" target="_blank" rel="noopener noreferrer" className="drawer-social-icon" aria-label="GitHub">
                <img src="./github.svg" alt="GitHub" width="24" height="24" style={{ display: 'block' }} />
              </a>
            </div>
          <a href="/JohnDoeCV.pdf" download className="drawer-download-btn">Download CV</a>
        </div>
      </aside>
        </>
    )
}