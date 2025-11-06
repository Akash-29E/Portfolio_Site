import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import './Accordion.css';

export default function MUIAccordion({ id, title, subtitle, years, children, onStateChange }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleToggleAll = (event) => {
      setOpen(event.detail.expand);
    };

    window.addEventListener('toggleAllAccordions', handleToggleAll);
    return () => window.removeEventListener('toggleAllAccordions', handleToggleAll);
  }, []);

  // Notify parent component when state changes
  useEffect(() => {
    if (onStateChange && id) {
      onStateChange(id, open);
    }
  }, [open, onStateChange, id]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Accordion
      expanded={open}
      onChange={handleToggle}
      className="custom-accordion"
    >
      <AccordionSummary
        expandIcon={
          <span className="expand-icon">
            {open ? '−' : '+'}
          </span>
        }
        aria-controls="panel-content"
        id="panel-header"
        className="accordion-summary"
      >
        <div className="accordion-header">
          <div className="accordion-title-section">
            <div className="accordion-title">{title}</div>
            {subtitle && (
              <div className="accordion-subtitle">
                {subtitle}
              </div>
            )}
          </div>
          {years && (
            <div className="accordion-years">
              {years}
            </div>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails className="accordion-details">
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
