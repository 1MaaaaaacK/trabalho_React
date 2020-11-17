import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.a`
  max-width: 450px;
  line-height: 45px;
  display: inline-flex;

  img {
    height: 75px;
    margin-top: 2px;
  }
  h2 {
    font-size: 48px;
    height: 10px;
    color: #a7b4f2;
    max-width: 1px;
    margin-top: 0px;
  }
`;

export const GifsLocation = styled.div`
  margin-top: 80px;
  max-width: 900px;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;

  .a {
    background: black;
    border-radius: 5px;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
      background: ${shade(0.2, '#424240')};
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
