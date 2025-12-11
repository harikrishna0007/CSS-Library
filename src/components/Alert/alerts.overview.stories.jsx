// src/components/alerts/alerts.stories.jsx
import React from 'react';
import './alerts.scss';

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    title: { control: 'text' },
    children: { control: 'text' },
    closable: { control: 'boolean' },
  },
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message.',
    closable: false,
  },
};

// Small React component that uses your WMATA classes
function Alert({ variant, title, children, closable, onClose }) {
  const classes = `wmata-alert wmata-alert-${variant}`;

  return (
    <div className={classes} role="alert">
      <div className="wmata-alert-content">
        {title && <div className="wmata-alert-title">{title}</div>}
        <div>{children}</div>
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

// CSF stories

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Success',
  children: 'Your changes have been saved successfully.',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: 'Error',
  children: 'Something went wrong while processing your request.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Warning',
  children: 'Please review the information before continuing.',
};

export const Closable = Template.bind({});
Closable.args = {
  variant: 'info',
  title: 'Dismissible',
  children: 'You can close this alert.',
  closable: true,
  onClose: () => {
    // In real app, you’d set state; for Storybook, just log
    console.log('Alert closed');
  },
};
