import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

const countries = ['kr', 'us'];

const CountriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Country = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }

  ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
`;

const Countries = ({ country, onSelect }) => {
  const { i18n } = useTranslation();

  return (
    <CountriesBlock>
      {countries.map(c => (
        <Country
          key={c}
          active={country === c}
          onClick={() => {
            if (c === 'kr') {
              i18n.changeLanguage('ko');
            } else {
              i18n.changeLanguage('en');
            }
            onSelect(c);
          }}
        >
          {c.toUpperCase()}
        </Country>
      ))}
    </CountriesBlock>
  );
};

Countries.propTypes = {
  country: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Countries;
