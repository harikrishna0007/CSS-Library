import React from 'react';
import './badges.scss';
//import '../cards/cards.scss'; // <-- if your card styles live elsewhere, update path
import '../cards/cards.scss';
export default {
  title: 'Components/Badge',
};

/* -----------------------------
   Minimal Badge Component
------------------------------ */
function Badge({ label, variant }) {
  return (
    <span className={`wmata-badge wmata-badge-${variant}`}>
      {label}
    </span>
  );
}

/* -----------------------------
   Basic Badge Stories
------------------------------ */
export const Neutral = () => <Badge label="Pending" variant="neutral" />;
export const Success = () => <Badge label="Approved" variant="success" />;
export const Error = () => <Badge label="Rejected" variant="error" />;
export const Warning = () => <Badge label="Attention" variant="warning" />;
export const Info = () => <Badge label="Info" variant="info" />;

/* -----------------------------
   Badge Inside a Card Example
------------------------------ */
export const InsideCard = () => (
  <div className="wmata-card" style={{ maxWidth: '500px', margin: '20px' }}>
    <div className="wmata-card-header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 className="wmata-page-title">Purchase Request #RITM0012345</h2>
          <p className="wmata-body-text">
            Laptop and accessories for new hire.
          </p>
        </div>

        <span className="wmata-badge wmata-badge-success">
          Approved
        </span>
      </div>
    </div>

    <div className="wmata-card-body">
      <div className="wmata-info-row">
        <div className="wmata-info-label">Requested By</div>
        <div className="wmata-info-value">Jane Doe</div>
      </div>

      <div className="wmata-info-row">
        <div className="wmata-info-label">Total Cost</div>
        <div className="wmata-info-value">$1,250.00</div>
      </div>
    </div>
  </div>
);
