import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  grayLightest,
  grayLight,
  grayDark,
  gray,
  white
} from './Variables';

const cardFrontSize = '260px';
const cardBackSize = '300px';

export const CardWrapper = styled.div`
  perspective: 800px;
`;

export const CardContainer = styled.div`
  height: ${cardBackSize};
  width: ${cardBackSize};
  margin: 1px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  transform-style: preserve-3d;
  transform: ${props => props.active && 'rotateY(-180deg)'};
`;

CardContainer.propTypes = {
  active: PropTypes.bool.isRequired,
};

const BaseCard = styled.div`
  cursor: pointer;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px ${grayLight};
  border: 1px solid ${grayLight};
`;

export const CardFrontWrapper = styled(BaseCard)`
  width: ${cardFrontSize};
  height: ${cardFrontSize};
  background-color: ${white};
  border-top: 2px solid ${grayDark};
  font-size: 24px;
`;

export const CardFrontDisclaimer = styled.div`
  position: inherit;
  bottom: 0;
  right: 0;
  padding: 10px;
  font-size: 11px;
  font-style: italic;
  color: ${gray};
  letter-spacing: 0px;
  backface-visibility: hidden; /* Have to duplicate this style because Safari ¯\_(ツ)_/¯ */
  :hover {
    color: inherit;
  }
`;

export const CardBackWrapper = styled(BaseCard)`
  width: ${cardBackSize};
  height: ${cardBackSize};
  background-color: ${grayLightest};
  transform: rotateY(-180deg);
`;

export const CardBackDescription = styled.div`
  overflow-y: scroll;
  height: 80%;
  width: 80%;
  font-size: 18px;
  line-height: 26px;
`;

export const CardBackTitle = styled.div`
  font-size: 24px;
`;

export const CardBackImage = styled.img.attrs({
  src: props => require(`../../assets/${props.image}`),
})`
  height: ${cardBackSize};
  width: ${cardBackSize};
`;

CardBackImage.propTypes = {
  image: PropTypes.string.isRequired,
};