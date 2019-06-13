import React from 'react';
import './index.scss';

export const ResumeButton = () => {
  return (
    <div className="resume-button flex-column">
      <div className="d-flex">
        <span className="ricon-upload icon" />
        <span>Drop your resume, or click to browse</span>
        <span> .docx or .pdf</span>
      </div>
    </div>
  );
};
