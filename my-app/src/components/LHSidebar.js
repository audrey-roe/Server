import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faUsers } from '@fortawesome/free-solid-svg-icons';

const LHSidebar = () => {
  return (
    <aside className='asidelhs'>
      <div className="icon-container">
        <div className="iconTh-wrapper">
          <FontAwesomeIcon icon={faTh} />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faUsers} />
        </div>
      </div>
    </aside>
  );
};

export default LHSidebar;
