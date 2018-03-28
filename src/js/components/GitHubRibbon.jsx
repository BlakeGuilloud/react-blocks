import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ribbonSrcSuffix = (color) => {
  switch (color) {
    case 'darkblue':
      return 'darkblue_121621';
    case 'green':
      return 'green_007200';
    case 'orange':
      return 'orange_ff7600';
    case 'white':
      return 'white_ffffff';
    case 'gray':
    case 'grey':
      return 'gray_6d6d6d';
    default:
      return 'red_aa0000';
  }
};

const GitHubRibbon = ({ alt, link, position, color }) => {
  const classNames = cx('ribbon', {
    'ribbon--right': position === 'right',
    'ribbon--left': position === 'left',
  });

  const ribbonSrc = `https://s3.amazonaws.com/github/ribbons/forkme_${position}_${ribbonSrcSuffix(color)}.png`;

  return (
    <a href={link}>
      <img className={classNames} src={ribbonSrc} alt={alt} />
    </a>
  );
};

GitHubRibbon.propTypes = {
  alt: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
  position: PropTypes.string,
};

GitHubRibbon.defaultProps = {
  alt: 'Fork me on GitHub',
  color: 'darkblue',
  link: 'https://github.com',
  position: 'left',
};

export default GitHubRibbon;