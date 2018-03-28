import React from 'react';
import PropTypes from 'prop-types';

const CardBack = ({ backTitle, description, image }) => {
  const renderContent = () => {
    if (description) {
      return (
        <div className="card__item-back-description">
          {description}
        </div>
      );
    }

    if (backTitle) {
      return (
        <div className="card__item-back-title">
          {backTitle}
        </div>
      );
    }

    if (image) {
      return (
        <img src={image} />
      );
    }

    return null;
  };

  return (
    <div className="card__item-back">
      {renderContent()}
    </div>
  );
};

CardBack.propTypes = {
  image: PropTypes.string,
  backTitle: PropTypes.string,
  description: PropTypes.string,
};

export default CardBack;