import React from 'react';
import '../src/components/iconography/iconography-usage.scss';

export default {
  title: 'WMATA/Iconography/Usage Guide'
};

export const Playground = () => (
  <div className="wmata-icon-usage">

    <h2>Iconography Usage Guide</h2>

    <div className="wmata-icon-usage-row">

      {/* SERVICE ALERT POSTER */}
      <div className="wmata-poster-example">
        <h3>Service Changes</h3>

        <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
          <svg width="40" height="40" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="18" fill="#4C3B2A" />
            <rect x="20" y="20" width="60" height="12" fill="#fff" />
            <rect x="20" y="38" width="60" height="28" fill="#fff" />
            <circle cx="35" cy="75" r="8" fill="#4C3B2A" />
            <circle cx="65" cy="75" r="8" fill="#4C3B2A" />
          </svg>

          <div style={{width: 28, height: 28, borderRadius: 14, background:'#F90'}}></div>
        </div>

        <p style={{fontSize: 22, marginTop: 12}}>
          No rail service between<br/>
          Stadium-Armory and<br/>
          New Carrollton
        </p>

        <p style={{fontSize: 14}}>
          Free shuttle bus service provided<br/>
          November 2–3
        </p>

        {/* Simple placeholder map */}
        <svg width="100%" height="120">
          <line x1="40" y1="100" x2="200" y2="20" stroke="#4C3B2A" strokeWidth="5"/>
          <circle cx="40" cy="100" r="10" fill="#4C3B2A"/>
          <circle cx="100" cy="70" r="10" fill="#4C3B2A"/>
          <circle cx="150" cy="45" r="10" fill="#4C3B2A"/>
          <circle cx="200" cy="20" r="10" fill="#4C3B2A"/>
        </svg>

      </div>

      {/* BUS FLAG */}
      <div className="wmata-bus-flag">
        <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:12}}>
          <svg width="40" height="40" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="18" fill="#FFF" />
            <rect x="20" y="20" width="60" height="12" fill="#4C3B2A" />
            <rect x="20" y="38" width="60" height="28" fill="#4C3B2A" />
            <circle cx="35" cy="75" r="10" fill="#4C3B2A" />
            <circle cx="65" cy="75" r="10" fill="#4C3B2A" />
          </svg>

          <h2>Bus Stop</h2>
        </div>

        <div className="wmata-bus-flag-section">
          <b>M12</b> North Bethesda
        </div>
        <div className="wmata-bus-flag-section">
          <b>M52</b> Laurel
        </div>
        <div className="wmata-bus-flag-section">
          <b>19</b> Dallas Av
        </div>
        <div className="wmata-bus-flag-section">
          <b>35</b> Van Dorn St
        </div>
      </div>

    </div>

  </div>
);

Playground.storyName = "Iconography – Usage Guide";
