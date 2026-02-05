import React from "react";

export default {
  title: "Components/Buttons",
  parameters: { layout: "padded" },
};

const Page = ({ title, desc, dark, children }) => (
  <div className="wmata-sb-page">
    <div className="wmata-sb-title">{title}</div>
    {desc && <div className="wmata-sb-desc">{desc}</div>}
    <div className={`wmata-sb-panel ${dark ? "wmata-sb-panel--dark" : ""}`}>{children}</div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="wmata-sb-section">
    <div className="wmata-sb-section-title">{title}</div>
    {children}
  </div>
);

const Row = ({ label, children }) => (
  <div className="wmata-sb-row">
    <div className="wmata-sb-label">{label}</div>
    <div className="wmata-sb-items">{children}</div>
  </div>
);

const Btn = ({ className, children, ...props }) => (
  <button type="button" className={`wmata-btn ${className}`} {...props}>
    {children}
  </button>
);

const IconBtn = ({ className, ...props }) => (
  <button
    type="button"
    className={`wmata-btn wmata-btn-icon ${className}`}
    aria-label="Icon button"
    {...props}
  >
    →
  </button>
);

/* ============ PRIMARY ============ */
export const Primary = () => (
  <Page title="Primary" desc="Default WMATA primary button (bronze).">
    <Section title="Large">
      <Row label="Default">
        <Btn className="wmata-btn-primary wmata-btn-lg">Button</Btn>
        <Btn className="wmata-btn-primary wmata-btn-lg">Button →</Btn>
        <IconBtn className="wmata-btn-primary wmata-btn-lg" />
      </Row>
      <Row label="Disabled">
        <Btn className="wmata-btn-primary wmata-btn-lg" disabled>Button</Btn>
        <Btn className="wmata-btn-primary wmata-btn-lg" disabled>Button →</Btn>
        <IconBtn className="wmata-btn-primary wmata-btn-lg" disabled />
      </Row>
    </Section>

    <Section title="Small">
      <Row label="Default">
        <Btn className="wmata-btn-primary wmata-btn-sm">Button</Btn>
        <Btn className="wmata-btn-primary wmata-btn-sm">Button →</Btn>
        <IconBtn className="wmata-btn-primary wmata-btn-sm" />
      </Row>
    </Section>
  </Page>
);

/* ============ SECONDARY ============ */
export const Secondary = () => (
  <Page title="Secondary" desc="Outline bronze button.">
    <Section title="Large">
      <Row label="Default">
        <Btn className="wmata-btn-secondary wmata-btn-lg">Button</Btn>
        <Btn className="wmata-btn-secondary wmata-btn-lg">Button Button →</Btn>
        <IconBtn className="wmata-btn-secondary wmata-btn-lg" />
      </Row>
      <Row label="Disabled">
        <Btn className="wmata-btn-secondary wmata-btn-lg" disabled>Button</Btn>
        <Btn className="wmata-btn-secondary wmata-btn-lg" disabled>Button →</Btn>
        <IconBtn className="wmata-btn-secondary wmata-btn-lg" disabled />
      </Row>
    </Section>
        <Section title="Small">
      <Row label="Default">
        <Btn className="wmata-btn-secondary wmata-btn-sm">Button</Btn>
        <Btn className="wmata-btn-secondary wmata-btn-sm">Button →</Btn>
        <IconBtn className="wmata-btn-secondary wmata-btn-sm" />
      </Row>
    </Section>
  </Page>
);

/* ============ ACCENT (BLUE) ============ */
export const Accent = () => (
  <Page title="Accent (Blue)" desc="Accent action button (capital blue).">
    <Section title="Large">
      <Row label="Default">
        <Btn className="wmata-btn-accent wmata-btn-lg">Button</Btn>
        <Btn className="wmata-btn-accent wmata-btn-lg">Button →</Btn>
        <IconBtn className="wmata-btn-accent wmata-btn-lg" />
      </Row>
    </Section>
  </Page>
);

// /* ============ PRIMARY V2 (DARK BLUE) ============ */
// export const PrimaryV2 = () => (
//   <Page title="Primary v2 (Dark Blue)" desc="Dark blue primary button.">
//     <Section title="Large">
//       <Row label="Default">
//         <Btn className="wmata-btn-primaryv2 wmata-btn-lg">Button</Btn>
//         <Btn className="wmata-btn-primaryv2 wmata-btn-lg">Button →</Btn>
//         <IconBtn className="wmata-btn-primaryv2 wmata-btn-lg" />
//       </Row>
//     </Section>
//   </Page>
// );

// /* ============ SECONDARY V2 (OUTLINE BLUE) ============ */
// export const SecondaryV2 = () => (
//   <Page title="Secondary v2 (Outline Blue)" desc="Outline dark-blue button.">
//     <Section title="Large">
//       <Row label="Default">
//         <Btn className="wmata-btn-secondaryv2 wmata-btn-lg">Button</Btn>
//         <Btn className="wmata-btn-secondaryv2 wmata-btn-lg">Button →</Btn>
//         <IconBtn className="wmata-btn-secondaryv2 wmata-btn-lg" />
//       </Row>
//     </Section>
//   </Page>
// );

/* ============ INVERSE PRIMARY ============ */
export const InversePrimary = () => (
  <Page title="Inverse Primary" desc="Use on dark backgrounds." dark>
    <Section title="Large">
      <Row label="Default">
        <Btn className="wmata-btn-inverse-primary wmata-btn-lg">Button</Btn>
        <Btn className="wmata-btn-inverse-primary wmata-btn-lg">Button →</Btn>
        <IconBtn className="wmata-btn-inverse-primary wmata-btn-lg" />
      </Row>
    </Section>
  </Page>
);

/* ============ INVERSE SECONDARY ============ */
export const InverseSecondary = () => (
  <Page title="Inverse Secondary" desc="Outline on dark backgrounds." dark>
    <Section title="Large">
      <Row label="Default">
        <Btn className="wmata-btn-inverse-secondary wmata-btn-lg">Button</Btn>
        <Btn className="wmata-btn-inverse-secondary wmata-btn-lg">Button →</Btn>
        <IconBtn className="wmata-btn-inverse-secondary wmata-btn-lg" />
      </Row>
    </Section>
  </Page>
);
