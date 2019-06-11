import React from 'react';
import './index.scss';
import { Link } from '../../../services/i18n';

export const BottomButtonLine = () => {
  return (
    <div className="bottom-line-bg">
      <div className="container d-flex justify-content-between">
        <div className="button-item-line">
          <Link href="/">
            <a>
              <span className="ricon-arrow-back" />
              Back to search results
            </a>
          </Link>
        </div>
        <div className="button-item-line">
          <a href="#">
            <span className="ricon-save" />
            Save to job list
          </a>
        </div>
        <div className="button-item-line">
          <a href="#">
            <span className="ricon-pdf" />
            Download PDF
          </a>
        </div>
        <div className="button-item-line">
          <a href="#">
            <span className="ricon-share" />
            Share job with someone
          </a>
        </div>
      </div>
    </div>
  );
};
