import './MainContent.css';
import { useState } from 'react';
import TopNavBar from './TopNavBar';
import ResumePage from './ResumePage';
import AboutMePage from './AboutMePage';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';

export default function MainContent() {
    const [selectedTab, setSelectedTab] = useState(2);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    let tabContent;
    if (selectedTab === 0) tabContent = <HomePage />;
    else if (selectedTab === 1) tabContent = <AboutMePage />;
    else if (selectedTab === 2) tabContent = <ResumePage />;
    else if (selectedTab === 3) tabContent = <ContactPage />;
    else if (selectedTab === 11) tabContent = <PortfolioPage />;

    return (
        <div className='maincontent' style={{ width: '75%' }}>
            <div className="nav-bar">
                <TopNavBar func={handleTabSelect} current={selectedTab} />
            </div>
            <div className={`content-area ${selectedTab === 0 ? 'no-radius' : ''}`}>
                <div key={selectedTab} className="tab-transition tab-fade-in">
                    {tabContent}
                </div>
            </div>
        </div>
    );
}