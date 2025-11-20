import React from 'react';
import '../src/components/photography/photography.scss';

export default {
  title: 'WMATA/Photography/Transportation'
};

export const Transportation = () => (
  <div className="wmata-photo-page">

    <div className="wmata-photo-row">

      {/* LEFT TEXT */}
      <div className="wmata-photo-left">
        <h2>Photography</h2>
        <h3>Transportation</h3>
        <p>
          Transportation images focus on the experience of using the Metro
          system. They should feel authentic and human, capturing Metro in motion
          and in its unique surroundings.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="wmata-photo-grid">

        <img
          className="wmata-photo-large"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        />

        <img
          className="wmata-photo-small"
          src="https://images.unsplash.com/photo-1500048993953-d23a436266cf"
        />

        <img
          className="wmata-photo-small"
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
        />

      </div>

    </div>

  </div>
);

Transportation.storyName = "Transportation";
