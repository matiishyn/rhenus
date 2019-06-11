import React from 'react';
import './index.scss';

export const ButtonLine = () => {
  return (
    <div className="container d-flex justify-content-start button-line">
      <div>
        <span>
          <span className="ricon-save" /> Save
        </span>
      </div>
      <div>
        <span>
          <span className="ricon-pdf" />
          PDF
        </span>
      </div>
      <div>
        <span>
          <span className="ricon-share" />
          Share
        </span>
      </div>
    </div>
  );
};
