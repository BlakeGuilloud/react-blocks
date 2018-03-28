import styled from 'styled-components';

import {
  white,
  grayDark,
  grayDarker,
  grayLightest,
  grayLight,
  grayLighter,
  gray
} from './Variables';

export const ContentWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
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

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  background: ${gray};
  border-radius: 7px;
  color: ${white};
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background: ${grayDark};
    text-decoration: none;
  }
`;