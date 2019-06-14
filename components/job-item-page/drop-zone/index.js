import React from 'react';
import Dropzone from 'react-dropzone';
import './index.scss';

export const DropZoneCustom = ({ onDrop }) => {
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section className="drop_zone">
          <div {...getRootProps()} className="d-flex flex-column">
            <input {...getInputProps()} />
            <span className="ricon-upload icon" />
            <span className="center-text">
              Drop your resume, or click to browse
            </span>
            <span className="bottom-text">.docx or .pdf</span>
          </div>
        </section>
      )}
    </Dropzone>
  );
};
