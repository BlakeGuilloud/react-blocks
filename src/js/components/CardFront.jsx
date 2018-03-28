import React from 'react';
import PropTypes from 'prop-types';

const CardFront = ({ disclaimer, title }) => (
  <div className="card__item-front">
    <div>
      {title}
    </div>
    <div className="card__item-front-disclaimer">
      {disclaimer}
    </div>
  </div>
);

CardFront.propTypes = {
  disclaimer: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CardFront;