import React from 'react';
import Dropzone from 'react-dropzone';
import './index.scss';
import cx from 'classnames';

export const DropZoneCustom = ({ onDrop, file, sm }) => {
  const filename = file?.name;
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section className={cx('drop_zone', { sm, isFile: !!filename })}>
          {!filename && (
            <div {...getRootProps()} className="d-flex flex-column">
              <input {...getInputProps()} />
              <span className="ricon-upload icon" />
              <span className="center-text">
                Drop your resume, or click to browse
              </span>
              <span className="bottom-text">.docx or .pdf</span>
            </div>
          )}
          {filename && (
            <div {...getRootProps()} className="d-flex">
              <input {...getInputProps()} />
              <div className="file-section d-flex">
                <span className="ricon-pdf" />
                <div className="d-flex flex-column file-name">
                  <span className="file-title">{file?.name}</span>
                  <a href="#">
                    Change file <span className="ricon-upload" />
                  </a>
                </div>
              </div>
            </div>
          )}
          {/*<span>{filename}</span>}*/}
        </section>
      )}
    </Dropzone>
  );
};
