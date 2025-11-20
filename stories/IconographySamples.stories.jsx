import React from 'react';
import '../src/components/iconography/iconography-samples.scss';

export default {
  title: 'WMATA/Iconography/Samples'
};

export const Playground = () => (
  <div className="wmata-icon-samples">

    <h2 style={{marginBottom: 16}}>Iconography Samples</h2>

    <div className="wmata-icon-samples-grid">

      {/* Bus */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" rx="12" />
        <rect x="30" y="30" width="40" height="10" fill="white" />
        <rect x="30" y="45" width="40" height="20" fill="white" />
        <circle cx="35" cy="75" r="8" />
        <circle cx="65" cy="75" r="8" />
      </svg>

      {/* Rail */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <rect x="28" y="20" width="44" height="60" rx="10" />
        <rect x="35" y="30" width="30" height="10" fill="white" />
        <circle cx="40" cy="70" r="7" />
        <circle cx="60" cy="70" r="7" />
        <rect x="20" y="78" width="60" height="8" />
      </svg>

      {/* Accessibility */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <circle cx="50" cy="22" r="10" />
        <path d="M50 35 L50 60 L70 60" strokeWidth="10" fill="none" />
        <path d="M40 50 Q30 70 50 85" strokeWidth="10" fill="none" />
      </svg>

      {/* Escalator */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <path d="M10 60 L40 20 L70 20 L90 60 Z" fill="none" strokeWidth="10" />
        <circle cx="70" cy="15" r="8" />
        <circle cx="30" cy="65" r="8" />
      </svg>

      {/* Airplane */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <path d="M50 10 L70 55 L50 48 L30 90 L25 85 L45 45 L30 40 Z" />
      </svg>

      {/* Arrow */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <path d="M20 45 H70 L55 30 L80 50 L55 70 L70 55 H20 Z" />
      </svg>

      {/* No Entry */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" />
        <rect x="25" y="45" width="50" height="10" fill="white" />
      </svg>

      {/* Elevator */}
      <svg className="wmata-icon-sample" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" rx="10" />
        <circle cx="40" cy="55" r="7" fill="white" />
        <circle cx="60" cy="55" r="7" fill="white" />
        <path d="M50 30 L45 40 H55 Z" fill="white" />
        <path d="M50 70 L45 60 H55 Z" fill="white" />
      </svg>

    </div>

  </div>
);

Playground.storyName = 'Iconography – Samples';
