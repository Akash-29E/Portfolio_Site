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
    else if (selectedTab === 3) tabContent = <PortfolioPage />;
    else if (selectedTab === 4) tabContent = <ContactPage />;

    return (
        <div style={{ width: '100%' }}>
            <TopNavBar func={handleTabSelect} />
            <div className='content-area'>
                <div key={selectedTab} className="tab-transition tab-fade-in">
                    {tabContent}
                </div>
            </div>
        </div>
    );
}