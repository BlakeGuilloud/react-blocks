import React from 'react';
import PropTypes from 'prop-types';

import {
  CardFrontDisclaimer,
  CardFrontWrapper
} from '../styled/CardStyles';

const CardFront = ({ disclaimer, title }) => (
  <CardFrontWrapper>
    {title}
    <CardFrontDisclaimer>
      {disclaimer}
    </CardFrontDisclaimer>
  </CardFrontWrapper>
);

CardFront.propTypes = {
  disclaimer: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CardFront;