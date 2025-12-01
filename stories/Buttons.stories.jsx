import React from "react";

export default {
  title: "Components/Buttons",
  parameters: {
    docs: {
      description: {
        component: `
WMATA Button components using WMATA naming convention.

### WMATA Button Class Structure

| Variant | CSS Class |
|--------|-----------|
| Primary | \`wmata-btn wmata-btn-primary\` |
| Secondary | \`wmata-btn wmata-btn-secondary\` |
| Accent | \`wmata-btn wmata-btn-accent\` |
| Primary V2 | \`wmata-btn wmata-btn-primaryv2\` |
| Secondary V2 | \`wmata-btn wmata-btn-secondaryv2\` |

---

### ServiceNow Usage

\`\`\`html
<button class="wmata-btn wmata-btn-primary">Primary</button>
<button class="wmata-btn wmata-btn-secondary">Secondary</button>
<button class="wmata-btn wmata-btn-accent">Accent</button>
<button class="wmata-btn wmata-btn-primaryv2">Primary V2</button>
<button class="wmata-btn wmata-btn-secondaryv2">Secondary V2</button>
\`\`\`

Paste this inside:
- Service Portal → Widget HTML
- UI Builder → HTML Element
- UI Page (classic)
`
      }
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "accent",
        "primaryv2",
        "secondaryv2"
      ],
    },
    label: { control: "text" },
  },
};

export const Playground = ({ variant, label }) => (
  <button className={`wmata-btn wmata-btn-${variant}`}>{label}</button>
);

Playground.args = {
  variant: "primary",
  label: "Click me",
};

export const AllButtons = () => (
  <div style={{ display: "flex", gap: 12 }}>
    <button className="wmata-btn wmata-btn-primary">Primary</button>
    <button className="wmata-btn wmata-btn-secondary">Secondary</button>
    <button className="wmata-btn wmata-btn-accent">Accent</button>
    <button className="wmata-btn wmata-btn-primaryv2">Primary V2</button>
    <button className="wmata-btn wmata-btn-secondaryv2">Secondary V2</button>
  </div>
);
