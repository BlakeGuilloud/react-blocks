import React from 'react';
import PropTypes from 'prop-types';

import {
  CardBackWrapper,
  CardBackDescription,
  CardBackTitle,
  CardBackImage
} from '../styled/CardStyles';

const CardBack = ({ backTitle, description, image }) => {
  const renderContent = () => {
    if (description) {
      return (
        <CardBackDescription>
          {description}
        </CardBackDescription>
      );
    }

    if (backTitle) {
      return (
        <CardBackTitle>
          {backTitle}
        </CardBackTitle>
      );
    }

    if (image) {
      return (
        <CardBackImage image={image} />
      );
    }

    return null;
  };

  return (
    <CardBackWrapper>
      {renderContent()}
    </CardBackWrapper>
  );
};

CardBack.propTypes = {
  image: PropTypes.string,
  backTitle: PropTypes.string,
  description: PropTypes.string,
};

export default CardBack;