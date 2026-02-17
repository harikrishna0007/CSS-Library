// src/components/alerts/alerts.stories.jsx
import React from "react";
import "./alerts.scss";

export default {
  title: "Components/Alert",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "WMATA Alert (Default = Banner). Use `wmata-alert` for the standard warning-style banner. Add a variant class for other semantic tones (info/success/error).",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "error", "info"],
      description:
        "Default uses warning banner styling (orange). Other variants override background/border colors.",
    },
    title: { control: "text" },
    children: { control: "text" },
    showIcon: { control: "boolean" },
    linkText: { control: "text" },
    closable: { control: "boolean" },
  },
  args: {
    variant: "default",
    title: "Lorem ipsum dolor sit amet",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    showIcon: true,
    linkText: "Text Link",
    closable: false,
  },
};

function Alert({ variant, title, children, showIcon, linkText, closable, onClose }) {
  const variantClass =
    variant && variant !== "default" ? `wmata-alert-${variant}` : "";

  const classes = ["wmata-alert", variantClass].filter(Boolean).join(" ");

  return (
    <div className={classes} role="alert">
      {showIcon && (
        <div className="wmata-alert-icon" aria-hidden="true">
          ⓘ
        </div>
      )}

      <div className="wmata-alert-content">
        {title && <div className="wmata-alert-title">{title}</div>}
        <p className="wmata-alert-message">{children}</p>

        {linkText && (
          <a className="wmata-alert-link" href="#">
            {linkText} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      {closable && (
        <button
          type="button"
          className="wmata-alert-close"
          aria-label="Close alert"
          onClick={onClose}
        >
          ✕
        </button>
      )}
    </div>
  );
}

const Template = (args) => <Alert {...args} />;

/* ✅ Default (no variant class) = Warning Banner */
export const Default = Template.bind({});
Default.args = { variant: "default" };

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  title: "System message",
  children: "This is a full-width banner alert with a dismiss action.",
  linkText: "Learn more",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  title: "Success",
  children: "Your changes have been saved successfully.",
  linkText: "View details",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  title: "Error",
  children: "Something went wrong while processing your request.",
  linkText: "Try again",
};

export const Closable = Template.bind({});
Closable.args = {
  variant: "default",
  title: "System message",
  children: "This is a full-width banner alert with a dismiss action.",
  linkText: "Learn more",
  closable: true,
  onClose: () => console.log("Alert closed"),
};
