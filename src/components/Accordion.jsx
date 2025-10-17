import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import './Accordion.css';

export default function MUIAccordion({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <Accordion
      expanded={open}
      onChange={() => setOpen(!open)}
      sx={{
        width: '100%',
        backgroundColor: 'var(--color-bg)',
        boxShadow: 'none',
        marginBottom: '1rem',
        '&.MuiAccordion-root': {
          borderBottom: open ? 'none' : 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          open ? (
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>−</span>
          ) : (
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>+</span>
          )
        }
        aria-controls="panel-content"
        id="panel-header"
        sx={{
          backgroundColor: 'var(--color-bg-dark)',
          color: 'var(--color-primary)',
          fontWeight: 500,
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          fontSize: '0.95rem',
          width: '100%',
          fontFamily: `'Rubik', 'Quicksand', sans-serif`,
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-primary)',
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
