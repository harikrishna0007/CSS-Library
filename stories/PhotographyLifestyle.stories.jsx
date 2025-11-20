import React from 'react';
import '../src/components/photography/photography.scss';

export default {
  title: 'WMATA/Photography/Lifestyle'
};

export const Lifestyle = () => (
  <div className="wmata-photo-page">

    <div className="wmata-photo-row">

      {/* LEFT TEXT */}
      <div className="wmata-photo-left">
        <h2>Photography</h2>
        <h3>Lifestyle</h3>
        <p>
          Lifestyle images show real people in everyday moments—commuting,
          exploring, or enjoying life. They should feel candid, diverse, and
          vibrant, capturing Metro as a natural part of daily life.
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="wmata-photo-grid">

        <img
          className="wmata-photo-large"
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
        />

        <img
          className="wmata-photo-small"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        />

        <img
          className="wmata-photo-small"
          src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f"
        />

      </div>

    </div>

  </div>
);

Lifestyle.storyName = "Lifestyle";
