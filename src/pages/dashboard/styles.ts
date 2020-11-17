import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
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

export const Form = styled.form<FormProps>`
  margin-top: 25px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 100px 0 0 100px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #3042c9;
    border: 0;
    border-radius: 0px 100px 100px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#192791')};
    }
  }
`;

export const GifsLocation = styled.div`
  margin-top: 80px;
  max-width: 900px;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  a {
    background: black;
    border-radius: 5px;
    //width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 0.2s;

    /* & + a {
      margin-left: 16px;
    } */
    &:hover {
      background: ${shade(0.2, '#424240')};
    }

    img {
      width: 180px;
      height: px;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
