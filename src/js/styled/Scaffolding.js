import styled from 'styled-components';

import {
  white,
  grayDark,
  grayDarker,
  grayLightest
} from './Variables';

export const ContentWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${white};
`;

export const HeaderWrapper = styled.div`
  height: 150px;
  background-color: ${grayDark};
  text-align: center;
  color: ${grayLightest};
  line-height: 150px;
  font-size: 40px;
  box-shadow: 0 0.1rem 0.9rem ${grayDarker};
`;