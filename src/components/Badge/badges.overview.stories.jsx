import React from 'react';
import './badges.scss';
import '../cards/cards.scss';

export default {
  title: 'Components/Badge',
};

/* -----------------------------
   ServiceNow Status Badge
   - uses: .wmata-badge + .wmata-badge--status + variant
------------------------------ */
function StatusBadge({ label, variant }) {
  return (
    <span className={`wmata-badge wmata-badge--status wmata-badge--${variant}`}>
      {label}
    </span>
  );
}

/* -----------------------------
   Internal App Badge (default)
   - uses: .wmata-badge
   - optional icon: .wmata-badge__icon
------------------------------ */
function InternalBadge({ label, withIcon = false }) {
  return (
    <span className="wmata-badge">
      {withIcon && (
        <span className="wmata-badge__icon" aria-hidden="true">
          {/* placeholder icon (replace later with your icon system) */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 7h10v10H7V7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M9 3h6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      {label}
    </span>
  );
}

/* -----------------------------
   Status Badge Stories (ServiceNow)
------------------------------ */
export const Neutral = () => <StatusBadge label="Pending" variant="neutral" />;
export const Success = () => <StatusBadge label="Approved" variant="success" />;
export const Error = () => <StatusBadge label="Rejected" variant="error" />;
export const Warning = () => <StatusBadge label="Attention" variant="warning" />;
export const Info = () => <StatusBadge label="Info" variant="info" />;

/* -----------------------------
   Internal Badge Stories
------------------------------ */
export const InternalWithoutIcon = () => (
  <InternalBadge label="Lorem Ipsum" withIcon={false} />
);

export const InternalWithIcon = () => (
  <InternalBadge label="Lorem Ipsum" withIcon />
);

/* Optional: a single demo story showing both like your design image */
export const InternalShowcase = () => (
  <div style={{ display: 'grid', gap: '12px', padding: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ width: '120px', fontWeight: 600 }}>With Icon</div>
      <InternalBadge label="Lorem Ipsum" withIcon />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ width: '120px', fontWeight: 600 }}>Without Icon</div>
      <InternalBadge label="Lorem Ipsum" withIcon={false} />
    </div>
  </div>
);

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

        {/* Use status badge inside card */}
        <span className="wmata-badge wmata-badge--status wmata-badge--success">
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
