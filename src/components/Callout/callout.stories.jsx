import React from 'react';
import './callout.scss';
import '../buttons/wmata-buttons.scss'; // if your button styles live here

export default {
  title: 'Components/Callout',
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['default', 'error', 'success'],
    },
    title: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorText: { control: 'text' },
    successTitle: { control: 'text' },
    successBody: { control: 'text' },
    showMobilePreview: { control: 'boolean' },
  },
};

function CalloutTemplate({
  state = 'default',
  title = 'Keep Up with Metro',
  label = 'Email Address',
  placeholder = '',
  errorText = 'Please enter a valid email address.',
  successTitle = 'Thanks for Subscribing',
  successBody = "We'll keep you posted lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  const stateClass =
    state === 'error'
      ? 'wmata-callout--error'
      : state === 'success'
      ? 'wmata-callout--success'
      : '';

  return (
    <div className={`wmata-callout ${stateClass}`}>
      <h3 className="wmata-callout__title">{title}</h3>

      {state !== 'success' ? (
        <div className="wmata-callout__form">
          <label className="wmata-callout__label">{label}</label>
          <input className="wmata-callout__input" type="email" placeholder={placeholder} />

          {state === 'error' && <p className="wmata-callout__error">{errorText}</p>}

          <div className="wmata-callout__actions">
            <button className="wmata-btn wmata-btn-primary">Subscribe</button>
          </div>
        </div>
      ) : (
        <div className="wmata-callout__success">
          <span className="wmata-callout__success-icon" aria-hidden="true" />
          <div>
            <h4 className="wmata-callout__success-title">{successTitle}</h4>
            <p className="wmata-callout__success-body">{successBody}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export const Default = {
  args: {
    state: 'default',
    showMobilePreview: false,
  },
  render: (args) => <CalloutTemplate {...args} />,
};

export const Error = {
  args: {
    state: 'error',
    showMobilePreview: false,
  },
  render: (args) => <CalloutTemplate {...args} />,
};

export const Completed = {
  args: {
    state: 'success',
    showMobilePreview: false,
  },
  render: (args) => <CalloutTemplate {...args} />,
};

 
