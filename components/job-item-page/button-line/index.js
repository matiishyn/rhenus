import React from 'react';
import './index.scss';

export const ButtonLine = () => {
  return (
    <div className="container d-flex justify-content-start button-line">
      <div>
        <a href="#">
          <span className="ricon-save" /> Save
        </a>
      </div>
      <div>
        <a href="#">
          <span className="ricon-pdf" />
          PDF
        </a>
      </div>
      <div>
        <a href="#">
          <span className="ricon-share" />
          Share
        </a>
      </div>
    </div>
  );
};
