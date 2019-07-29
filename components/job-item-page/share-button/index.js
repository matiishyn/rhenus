import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon
} from 'react-share';
import './index.scss';

export const ShareButtons = props => {
  const { urlIdForShare } = props;
  const shareUrl = `https://rhenus-ix.herokuapp.com/en/job?id=${urlIdForShare}`;
  return (
    <div className="d-flex share-button-group">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={30} />
      </FacebookShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={30} />
      </LinkedinShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={30} />
      </TwitterShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon size={30} />
      </EmailShareButton>
    </div>
  );
};
