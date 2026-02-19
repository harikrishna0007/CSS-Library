import React from 'react';
import './avatar.scss';

export default {
  title: 'Components/Avatar',
  argTypes: {
    initials: { control: 'text' },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['default', 'neutral', 'bronze'],
    },
    ring: { control: 'boolean' },
  },
};

function Avatar({ initials = 'DW', size = 'md', variant = 'default', ring = false }) {
  const classes = [
    'wmata-avatar',
    `wmata-avatar--${size}`,
    variant !== 'default' ? `wmata-avatar--${variant}` : '',
    ring ? 'wmata-avatar--ring' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} aria-label={`User initials ${initials}`}>
      <span className="wmata-avatar__text">{initials}</span>
    </span>
  );
}

export const Playground = {
  args: {
    initials: 'DW',
    size: 'md',
    variant: 'default',
    ring: false,
  },
  render: (args) => <Avatar {...args} />,
};

export const Sizes = () => (
  <div style={{ display: 'grid', gap: 16, alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 80 }}>Large</div>
      <Avatar initials="DW" size="lg" />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 80 }}>Medium</div>
      <Avatar initials="DW" size="md" />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 80 }}>Small</div>
      <Avatar initials="DW" size="sm" />
    </div>
  </div>
);
