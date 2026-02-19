import React from 'react';
import './accordion.scss';

export default {
  title: 'Components/Accordion',
};

export const Default = () => (
  <div className="wmata-accordion">
    <details>
      <summary>Lorem Ipsum Dolor</summary>
      <div>
        Aenean tincidunt dictum dolor, et condimentum mauris tempus ut. Nunc sed
        tincidunt leo. Nulla interdum mattis dolor, id maximus sapien aliquet ut.
      </div>
    </details>

    <details open>
      <summary>Lorem Ipsum Dolor</summary>
      <div>
        Vestibulum sed risus. Sed non aliquam turpis. Pellentesque interdum sapien
        sit amet magna lobortis ultrices.
      </div>
    </details>
  </div>
);
